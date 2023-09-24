export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const bufferToString = new Uint16Array(this.buffer);
    let newString = '';
    for (let i = 0; i < bufferToString.length; i += 1) {
      newString += String.fromCharCode(bufferToString[i]);
    }
    return newString;
  }
}
