"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
function installLatestFormatVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        // Latest version can be found here:
        // https://dotnet.myget.org/feed/format/package/nuget/dotnet-format
        const version = '3.1.55101';
        const packageRepository = 'https://dotnet.myget.org/F/format/api/v3/index.json';
        core.debug(`Downloading Latest dotnet format tool (${version})`);
        const execString = `dotnet tool install -g dotnet-format --version ${version} --add-source ${packageRepository}`;
        return exec.exec(execString);
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const exitCode = yield installLatestFormatVersion();
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
