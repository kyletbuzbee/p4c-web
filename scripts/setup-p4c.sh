#!/bin/bash
echo "🚀 Starting P4C Local Environment Setup..."

# 1. Initialize Supabase if not already done
if [ ! -d "./supabase" ]; then
    npx supabase init
fi

# 2. Start Supabase (Requires Docker to be running)
npx supabase start

# 3. Get local keys and update .env
ANON_KEY=$(npx supabase status -o json | jq -r '.ANON_KEY')
echo "VITE_SUPABASE_URL=http://localhost:54321" > .env
echo "VITE_SUPABASE_ANON_KEY=$ANON_KEY" >> .env

# 4. Spin up the React container
docker-compose up -d --build

echo "✅ Setup complete! App: http://localhost:3001 | Supabase Studio: http://localhost:54323"