/**
 * ESLint Rule: require-images-constant
 *
 * Enforces that all image references in JSX use the IMAGES constant from
 * src/constants/images.ts instead of hardcoded paths.
 *
 * Usage: Add to eslint.config.js plugins and rules
 */

const rule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce use of IMAGES constant for local image assets',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: {
      type: 'object',
      properties: {
        allowDomains: {
          type: 'array',
          items: { type: 'string' },
          default: [
            'via.placeholder.com',
            'images.unsplash.com',
            'picsum.photos',
          ],
        },
      },
      additionalProperties: false,
    },
    messages: {
      useImagesConstant:
        'Use IMAGES constant from @constants/images instead of hardcoded path. Found: {{ path }}',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const allowedDomains = options.allowDomains || [
      'via.placeholder.com',
      'images.unsplash.com',
      'picsum.photos',
    ];

    const filename = context.filename;

    // Skip test files
    if (filename.includes('.test.') || filename.includes('.spec.')) {
      return {};
    }

    // Only check JSX/TSX files
    if (!filename.match(/\.(jsx|tsx)$/)) {
      return {};
    }

    return {
      JSXAttribute(node) {
        if (node.name && node.name.name !== 'src') {
          return;
        }

        if (
          !node.value ||
          node.value.type !== 'Literal' ||
          typeof node.value.value !== 'string'
        ) {
          return;
        }

        const srcValue = node.value.value;

        // Check if it's a local image path
        const isLocalImage =
          srcValue.startsWith('/images/') ||
          srcValue.startsWith('images/') ||
          (srcValue.startsWith('/') && srcValue.includes('/images/'));

        if (!isLocalImage) {
          return;
        }

        // Check if it's an allowed external domain
        const isAllowedDomain = allowedDomains.some((domain) =>
          srcValue.includes(domain)
        );
        if (isAllowedDomain) {
          return;
        }

        context.report({
          node,
          messageId: 'useImagesConstant',
          data: { path: srcValue },
        });
      },
    };
  },
};

export default {
  rules: {
    'use-images-constant': rule,
  },
};
