module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
}