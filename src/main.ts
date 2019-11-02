import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function installLatestFormatVersion() : Promise<number> {
  // Latest version can be found here:
  // https://dotnet.myget.org/feed/format/package/nuget/dotnet-format
  const version = '3.1.55101' 
  const packageRepository = 'https://dotnet.myget.org/F/format/api/v3/index.json'

  core.debug(`Downloading Latest dotnet format tool (${version})`);
  const execString = `dotnet tool install -g dotnet-format --version ${version} --add-source ${packageRepository}`

  return exec.exec(execString)
}

async function run() {
  try {
    const exitCode = await installLatestFormatVersion();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
