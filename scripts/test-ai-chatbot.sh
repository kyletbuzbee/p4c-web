#!/bin/bash

# AI Chatbot Setup Validation Script
# This script helps validate your AI chatbot setup

echo "🤖 AI Chatbot Setup Validation"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if server directory exists
if [ ! -d "server" ]; then
    print_error "Server directory not found. Make sure you're in the root project directory."
    exit 1
fi

print_status "Server directory found"

# Check if .env file exists
if [ ! -f "server/.env" ]; then
    print_warning "No .env file found in server directory"
    echo "Creating example .env file..."
    cat > server/.env << EOF
# Google Gemini API Key (Required)
GEMINI_API_KEY=your_gemini_api_key_here

# CORS Configuration (Optional)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001

# Server Configuration (Optional)
PORT=3001
NODE_ENV=development
EOF
    print_info "Example .env file created at server/.env"
    print_info "Please update it with your actual Gemini API key"
else
    print_status "Environment file found"
    
    # Check if GEMINI_API_KEY is set
    if grep -q "GEMINI_API_KEY=" server/.env; then
        API_KEY=$(grep "GEMINI_API_KEY=" server/.env | cut -d'=' -f2)
        if [ "$API_KEY" = "your_gemini_api_key_here" ] || [ -z "$API_KEY" ]; then
            print_warning "GEMINI_API_KEY not configured properly"
            print_info "Please update server/.env with your actual API key"
        else
            print_status "GEMINI_API_KEY configured"
        fi
    else
        print_warning "GEMINI_API_KEY not found in .env file"
        print_info "Adding GEMINI_API_KEY to .env file..."
        echo "GEMINI_API_KEY=your_gemini_api_key_here" >> server/.env
    fi
fi

# Check if server dependencies are installed
if [ ! -d "server/node_modules" ]; then
    print_warning "Server dependencies not installed"
    print_info "Run: cd server && npm install"
else
    print_status "Server dependencies installed"
fi

# Check if frontend dependencies are installed
if [ ! -d "node_modules" ]; then
    print_warning "Frontend dependencies not installed"
    print_info "Run: npm install"
else
    print_status "Frontend dependencies installed"
fi

# Check if server package.json has required dependencies
if [ -f "server/package.json" ]; then
    if grep -q "@google/generative-ai" server/package.json; then
        print_status "Gemini AI dependency found"
    else
        print_error "Gemini AI dependency missing"
        print_info "Run: cd server && npm install @google/generative-ai"
    fi
fi

# Check if frontend has required dependencies
if [ -f "package.json" ]; then
    if grep -q "@google/generative-ai" package.json; then
        print_status "Frontend Gemini AI dependency found"
    else
        print_warning "Frontend Gemini AI dependency missing"
        print_info "Consider installing for client-side functionality"
    fi
fi

# Test if backend server is running
print_info "Testing backend server..."
if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
    print_status "Backend server is running"
    
    # Get health check response
    HEALTH_RESPONSE=$(curl -s http://localhost:3001/api/health)
    if echo "$HEALTH_RESPONSE" | grep -q '"status":"healthy"'; then
        print_status "Backend health check passed"
    else
        print_warning "Backend health check failed or incomplete"
        echo "Response: $HEALTH_RESPONSE"
    fi
else
    print_warning "Backend server not running on localhost:3001"
    print_info "To start the server:"
    print_info "1. cd server"
    print_info "2. npm start"
    print_info "3. Keep this terminal open"
fi

# Test if frontend is running
print_info "Testing frontend server..."
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    print_status "Frontend server is running"
else
    print_warning "Frontend server not running on localhost:3000"
    print_info "To start the frontend:"
    print_info "1. npm run dev"
    print_info "2. Keep this terminal open"
fi

# Check Vite proxy configuration
if [ -f "vite.config.ts" ]; then
    if grep -q "localhost:3001" vite.config.ts; then
        print_status "Vite proxy configured correctly"
    else
        print_warning "Vite proxy may not be configured for port 3001"
        print_info "Check vite.config.ts proxy settings"
    fi
fi

# Summary
echo ""
echo "📋 Setup Summary"
echo "================"
echo "Required steps:"
echo "1. Get Google Gemini API key from https://aistudio.google.com/"
echo "2. Update server/.env with your API key"
echo "3. Start backend: cd server && npm start"
echo "4. Start frontend: npm run dev"
echo "5. Test chatbot at http://localhost:3000"
echo ""
echo "Troubleshooting:"
echo "- Check server logs for detailed error messages"
echo "- Test API endpoints directly with curl or Postman"
echo "- Check browser console for frontend errors"
echo "- Refer to docs/AI_CHATBOT_SETUP.md for detailed instructions"

print_info "For more information, see docs/AI_CHATBOT_SETUP.md"