import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('type-graphql e2e', () => {
  it('should create type-graphql', async (done) => {
    const plugin = uniq('type-graphql');
    ensureNxProject('@schematics/type-graphql', 'dist/libs/type-graphql');
    await runNxCommandAsync(
      `generate @schematics/type-graphql:type-graphql ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Executor ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async (done) => {
      const plugin = uniq('type-graphql');
      ensureNxProject('@schematics/type-graphql', 'dist/libs/type-graphql');
      await runNxCommandAsync(
        `generate @schematics/type-graphql:type-graphql ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async (done) => {
      const plugin = uniq('type-graphql');
      ensureNxProject('@schematics/type-graphql', 'dist/libs/type-graphql');
      await runNxCommandAsync(
        `generate @schematics/type-graphql:type-graphql ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
