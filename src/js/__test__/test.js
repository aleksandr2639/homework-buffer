import ArrayBufferConverter, { getBuffer } from '../ArrayBuffer';

test('method load success', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('method toString success', () => {
  const receivedString = ArrayBufferConverter.toString();
  const exampleString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(receivedString).toBe(exampleString);
});
