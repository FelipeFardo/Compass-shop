export function validEmail(value: string) {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

  return emailRegex.test(value)
}
