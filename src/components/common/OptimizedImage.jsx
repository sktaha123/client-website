/**
 * OptimizedImage — reusable <picture> component.
 * Serves AVIF → WebP → original fallback.
 *
 * KEY FIX: <picture> is inline by default. We use `display: contents`
 * so the <picture> wrapper is invisible to layout — the inner <img>
 * inherits all flex/grid/w-full/h-full behaviour exactly as if there
 * were no wrapper at all.
 *
 * Pass `priority` for above-the-fold images (disables lazy loading).
 */
const OptimizedImage = ({
  src,
  alt,
  className = "",
  style,
  loading,
  priority = false,
  width,
  height,
  sizes,
  onError,
}) => {
  /* All images here are already .webp — derive AVIF source for future use.
   * WebP source is omitted when src itself already ends in .webp.          */
  const avifSrc = src?.replace(/\.(webp|jpg|jpeg|png)$/i, ".avif");
  const webpSrc = src?.replace(/\.(avif|jpg|jpeg|png)$/i, ".webp");

  const lazyLoad = !priority && loading !== "eager" ? "lazy" : "eager";

  return (
    /* display:contents — picture acts as a transparent wrapper.
       The <img> inside behaves exactly like a bare <img> in layout. */
    <picture style={{ display: "contents" }}>
      {avifSrc && <source srcSet={avifSrc} type="image/avif" sizes={sizes} />}
      {webpSrc && webpSrc !== src && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        loading={lazyLoad}
        width={width}
        height={height}
        decoding={priority ? "sync" : "async"}
        onError={onError}
      />
    </picture>
  );
};

export default OptimizedImage;
