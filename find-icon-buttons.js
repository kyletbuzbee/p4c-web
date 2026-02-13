import fs from 'fs';

const lucideIcons = [
  'X',
  'Search',
  'SlidersHorizontal',
  'ArrowRight',
  'HeartHandshake',
  'Briefcase',
  'Building2',
  'Play',
  'Pause',
  'Volume2',
  'VolumeX',
  'Quote',
  'Home',
  'Hammer',
  'DollarSign',
  'TrendingUp',
  'Star',
];

function findIconButtons(content) {
  const buttons = [];
  const buttonRegex = /<button[^>]*>[\s\S]*?<\/button>/g;
  const matches = content.match(buttonRegex) || [];

  matches.forEach((button) => {
    // Check if button contains any of the lucide icons
    const hasIcon = lucideIcons.some((icon) => button.includes(`<${icon}`));
    if (hasIcon) {
      const hasAriaLabel = button.includes('aria-label');
      buttons.push({ button, hasAriaLabel });
    }
  });

  return buttons;
}

// Check Home.tsx
const homeContent = fs.readFileSync('src/pages/Home.tsx', 'utf8');
const homeIconButtons = findIconButtons(homeContent);
console.log('=== Home.tsx: Icon Buttons ===');
homeIconButtons.forEach(({ button, hasAriaLabel }, index) => {
  console.log(
    `Button ${index + 1}: ${hasAriaLabel ? '✅ Has aria-label' : '❌ Missing aria-label'}`
  );
  if (!hasAriaLabel) {
    console.log(button);
    console.log();
  }
});

// Check SuccessStories.tsx
const successStoriesContent = fs.readFileSync(
  'src/pages/SuccessStories.tsx',
  'utf8'
);
const successStoriesIconButtons = findIconButtons(successStoriesContent);
console.log('\n=== SuccessStories.tsx: Icon Buttons ===');
successStoriesIconButtons.forEach(({ button, hasAriaLabel }, index) => {
  console.log(
    `Button ${index + 1}: ${hasAriaLabel ? '✅ Has aria-label' : '❌ Missing aria-label'}`
  );
  if (!hasAriaLabel) {
    console.log(button);
    console.log();
  }
});

// Check AddPropertyModal.tsx
const addPropertyModalContent = fs.readFileSync(
  'src/components/AddPropertyModal.tsx',
  'utf8'
);
const addPropertyModalIconButtons = findIconButtons(addPropertyModalContent);
console.log('\n=== AddPropertyModal.tsx: Icon Buttons ===');
addPropertyModalIconButtons.forEach(({ button, hasAriaLabel }, index) => {
  console.log(
    `Button ${index + 1}: ${hasAriaLabel ? '✅ Has aria-label' : '❌ Missing aria-label'}`
  );
  if (!hasAriaLabel) {
    console.log(button);
    console.log();
  }
});

// Check FloatingChatbot.tsx
const floatingChatbotContent = fs.readFileSync(
  'src/components/FloatingChatbot.tsx',
  'utf8'
);
const floatingChatbotIconButtons = findIconButtons(floatingChatbotContent);
console.log('\n=== FloatingChatbot.tsx: Icon Buttons ===');
floatingChatbotIconButtons.forEach(({ button, hasAriaLabel }, index) => {
  console.log(
    `Button ${index + 1}: ${hasAriaLabel ? '✅ Has aria-label' : '❌ Missing aria-label'}`
  );
  if (!hasAriaLabel) {
    console.log(button);
    console.log();
  }
});
