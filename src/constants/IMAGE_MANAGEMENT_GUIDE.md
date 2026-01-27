# Image Management System Documentation

/n## Overview /nThe Properties 4 Creation website uses a centralized image
management system implemented through the [`constants/images.ts`](./images.ts)
file. This system provides a unified, responsive approach to managing all visual
assets while maintaining clean separation between code and resources. /n##
Benefits /n- **Centralized Control**: All image paths are managed in one
location

- **Type Safety**: TypeScript ensures correct usage and prevents typos
- **Easy Maintenance**: Changing an image path only requires updating one
  location
- **Consistent Naming**: Hierarchical structure promotes consistency
- **No Hardcoded Paths**: Eliminates scattered file references throughout
  components /n## Structure /n### Import Usage /n```typescript import { IMAGES }
  from '../constants/images'; /n// Usage in components
  <img src={IMAGES.BANNERS.HERO_HOME} alt="Home Banner" />

````
/n### Namespace Organization
/nThe image registry is organized into logical namespaces:
/n#### 1. Brand Assets (`IMAGES.LOGO`)
- `SVG`: Primary brand logo in SVG format
- `PNG`: Alternative PNG version for compatibility
/n#### 2. Page Hero Banners (`IMAGES.BANNERS`)
All hero banners use the `HERO_` prefix for consistency:
- `HERO_HOME`: Main landing page banner
- `HERO_ABOUT`: About page banner
- `HERO_CONTACT`: Contact page banner
- `HERO_IMPACT`: Impact page banner
- `HERO_PRIVACY`: Privacy policy page banner
- `HERO_PROJECTS`: Projects page banner
- `HERO_RESOURCES`: Resources page banner
- `HERO_TERMS`: Terms page banner
- `HERO_TRANSPARENCY`: Transparency page banner
- `HERO_APPLICATION`: Application page banner
- `HERO_FAQ`: FAQ page banner
/n#### 3. Property Listings (`IMAGES.PROPERTIES`)
- `TYLER_RANCH`: Tyler Ranch property image
- `JEFFERSON_RIVER`: Jefferson River property image
- `KEMP_TOWNHOME`: Kemp Townhome property image
- `LONGVIEW_VICTORIAN`: Longview Victorian property image
- `MARSHALL_FARMHOUSE`: Marshall Farmhouse property image
- `MINEOLA_STUDIO`: Mineola Studio property image
- `RODRIGUEZ_FAMILY`: Rodriguez Family impact image
/n#### 4. Team & About (`IMAGES.TEAM`)
- `OWNER`: Team owner headshot
- `HEADSHOT`: General team headshot
/n#### 5. Renovation Showcase (`IMAGES.RENOVATION`)
Before/After pairs for showcasing transformations:
- `BATHROOM`: Bathroom renovation before/after
- `KITCHEN`: Kitchen renovation before/after
- `LIVING_ROOM`: Living room renovation before/after
- `PORCH`: Porch renovation before/after
/nEach renovation has `BEFORE` and `AFTER` properties.
/n#### 6. Gallery / Work (`IMAGES.GALLERY`)
- `FRAMING`: Construction framing work
- `PAINTING`: Painting work
- `MEASURING`: Measuring and planning
- `REMODELING`: General remodeling work
/n#### 7. Icon System (`IMAGES.ICONS`)
Key icons for the veteran/family housing platform:
- **Core Brand Icons**: `SOLDIER`, `FLAG`, `HEART`, `HOME`, `FAMILY`
- **Property & Construction**: `PATIO`, `QUALITY`, `COMMUNITY`, `PATRIOTISM`
- **Additional Support**: `VA_LOAN`, `SUPPORT`, `QUALITY_CONTROL`, `STANDARD`
/n#### 8. Videos (`IMAGES.VIDEOS`)
- `HERO_PROPERTIES`: Properties banner video
- `HERO_WORK`: Our work banner video
/n## Adding New Images
/n### 1. Upload Assets
Place new images in the appropriate directory:
- Banners: `/images/banners/`
- Properties: `/images/properties/`
- Icons: `/images/icons/`
- Team: `/images/about/`
- Gallery: `/images/our-work-gallery/`
- Videos: `/images/videos/`
/n### 2. Update Constants
Add the new image path to the appropriate namespace in [`constants/images.ts`](./images.ts):
/n```typescript
// Example: Adding a new property
PROPERTIES: {
  // existing properties...
  NEW_PROPERTY: '/images/properties/new-property-image.webp',
}
````

/n### 3. Use in Components Reference the new image using the constant:
/n```typescript <img src={IMAGES.PROPERTIES.NEW_PROPERTY} alt="New Property" />

````
/n## Responsive Image Support
/nThe system supports responsive images through multiple resolution variants. When adding new images:
/n1. **Create multiple resolutions**: 400w, 800w, 1200w, 1600w
2. **Use highest resolution as primary**: Map the 800w or 1600w version as the main reference
3. **Consider performance**: Balance quality with load times
/n## Icon Usage
/nIcons are integrated into the image system for consistency:
/n```typescript
// Example: Using a soldier icon
<img src={IMAGES.ICONS.SOLDIER} alt="Veteran Support" className="w-6 h-6" />
/n// Example: Using a heart icon for support
<img src={IMAGES.ICONS.HEART} alt="Community Support" className="w-4 h-4" />
````

/n## Best Practices /n### Naming Conventions

- Use `PASCAL_CASE` for constant names
- Use descriptive names that clearly indicate the image purpose
- Use `HERO_` prefix for banner images
- Use consistent prefixes for related images /n### File Organization
- Keep images organized by purpose in dedicated directories
- Use WebP format for better compression when possible
- Maintain original resolution for flexibility /n### Performance Considerations
- Use appropriate image resolutions for different screen sizes
- Consider lazy loading for below-the-fold images
- Optimize images for web delivery /n## Maintenance /n### Updating Images

1. Replace the physical file in the appropriate directory
2. Update the path in [`constants/images.ts`](./images.ts) if the filename
   changed
3. Test all components that use the updated image /n### Removing Images
4. Update all component references to use alternative images
5. Remove the constant from [`constants/images.ts`](./images.ts)
6. Delete the physical file from the filesystem /n## Troubleshooting /n### Image
   Not Loading

- Check that the file exists at the specified path
- Verify the path in [`constants/images.ts`](./images.ts) is correct
- Ensure the image format is supported /n### TypeScript Errors
- Verify the constant name is spelled correctly
- Check that the namespace exists and is properly exported
- Ensure the import statement is correct /n### Performance Issues
- Check image file sizes
- Consider adding additional resolution variants
- Implement lazy loading for large images /n## Integration with Components /nThe
  image system integrates seamlessly with existing components: /n-
  **BeforeAfterSlider**: Uses `IMAGES.RENOVATION` for before/after comparisons
- **PropertyCard**: Uses `IMAGES.PROPERTIES` for property images
- **Hero**: Uses `IMAGES.BANNERS.HERO_HOME` for main hero image
- **All pages**: Use appropriate banner images from `IMAGES.BANNERS` /nThis
  centralized approach ensures consistency, maintainability, and excellent
  developer experience across the entire Properties 4 Creation platform.
