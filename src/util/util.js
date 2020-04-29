export default function uniqID() {
  return `uniqID-${Date.now() + Math.floor(Math.random() * 100)}`;
}
