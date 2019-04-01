import { decode } from 'jpeg-js';

import { Image, ImageKind } from '../Image';

/**
 * Decode a jpeg. See the jpeg-js npm module.
 * @param buffer The data to decode
 */
export function decodeJpeg(buffer: ArrayBufferView): Image {
  const jpeg = decode(
    new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength),
    true
  );
  return new Image(jpeg.width, jpeg.height, {
    data: jpeg.data,
    kind: ImageKind.RGBA
  });
}
