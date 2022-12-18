// /** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   globals: {
//     "ts-jest": {
//       tsconfig: "tsconfig.jest.json"
//     }
//   }
// };

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // [...]
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: "tsconfig.jest.json"
      },
    ],
  },
};
