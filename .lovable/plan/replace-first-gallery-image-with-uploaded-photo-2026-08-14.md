# Replace First Gallery Image with Uploaded Photo

## Goal
Replace the first image in the homepage horizontal scroll gallery (currently the Northlight Studio brand composition) with the uploaded `Born_x_Raised.jpeg` photo.

## Current State
- The selected element in the preview maps to the first `<img>` inside the horizontal scroll gallery on `src/pages/Index.tsx`.
- That image is defined in `src/components/shared/HorizontalScrollGallery.tsx` as `gallery1`, imported from `src/assets/gallery/gallery-1.jpg` and labeled "Northlight Studio brand composition".

## Plan
1. **Create a CDN asset pointer** for the uploaded `Born_x_Raised.jpeg` using `lovable-assets create`, saving it as `src/assets/gallery/gallery-1.jpg.asset.json`.
2. **Update `src/components/shared/HorizontalScrollGallery.tsx`**:
   - Replace the `gallery1` binary import with an import of the new `.asset.json` pointer.
   - Use `.url` from the pointer as the `src` for the first gallery image.
   - Update the `alt` text to describe the new photo (e.g., "Born x Raised mural portrait").
3. **Delete the old binary** `src/assets/gallery/gallery-1.jpg` once the reference is rewritten.
4. **Verify** with `bun run build` and a quick preview check that the first gallery image renders correctly.
