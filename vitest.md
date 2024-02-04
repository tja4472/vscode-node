# w--client
function createClient(url: string, options: VitestClientOptions = {}) 
returns
export interface VitestClient {
  ws: WebSocket
  state: StateManager
  rpc: BirpcReturn<WebSocketHandlers, WebSocketEvents>
  waitForConnection(): Promise<void>
  reconnect(): Promise<void>
}

# https://github.com/MilanKovacic/vitest-visual-studio-code-extension.git

## class ApiProcess

  constructor( 
    private vitest: { cmd: string; args: string[] },
    private workspace: string,
    private handlers: Handlers = {},
    private recordOutput = false,
    private customStartProcess?: (config: StartConfig) => void,
  )

### execWithLog line 163

utils.ts
https://nodejs.org/api/child_process.html

#### command
"npx"

#### args
[
  "vitest",
  "--api.host",
  "127.0.0.1",
  "/home/tim/Documents/vscode/git-hub/vitest-visual-studio-code-extension/samples/basic/test/add.test.ts",
  "-t",
  "addition add",
  "--api.port",
  "45783",
  "--api.host",
  "127.0.0.1",
]

#### error
(line) => {
  logs.push(line);
  if (this.recordOutput)
    this.output.push(line);
  clearTimeout(timer);
  timer = setTimeout(() => {
    _log2(logs.join("\r\n"));
    logs.length = 0;
  }, 200);
}

#### log
(line) => {
  logs.push(line);
  if (this.recordOutput)
    this.output.push(line);
  clearTimeout(timer);
  timer = setTimeout(() => {
    _log2(logs.join("\r\n"));
    logs.length = 0;
  }, 200);
}

#### options
{
  cwd: "/home/tim/Documents/vscode/git-hub/vitest-visual-studio-code-extension/samples/basic",
  env: {
    CHROME_DESKTOP: "code-url-handler.desktop",
    DBUS_SESSION_BUS_ADDRESS: "unix:path=/run/user/1000/bus",
    DESKTOP_SESSION: "ubuntu",
    DISPLAY: ":0",
    GDK_BACKEND: "x11",
    GDMSESSION: "ubuntu",
    GIO_LAUNCHED_DESKTOP_FILE: "/usr/share/applications/code.desktop",
    GIO_LAUNCHED_DESKTOP_FILE_PID: "17231",
    GJS_DEBUG_OUTPUT: "stderr",
    GJS_DEBUG_TOPICS: "JS ERROR;JS LOG",
    GNOME_DESKTOP_SESSION_ID: "this-is-deprecated",
    GNOME_SETUP_DISPLAY: ":1",
    GNOME_SHELL_SESSION_MODE: "ubuntu",
    GTK_MODULES: "gail:atk-bridge",
    HOME: "/home/tim",
    IM_CONFIG_CHECK_ENV: "1",
    IM_CONFIG_PHASE: "1",
    INVOCATION_ID: "25e68a77aced44a0a8e51bfa1055ce7d",
    JOURNAL_STREAM: "8:32116",
    LANG: "en_GB.UTF-8",
    LANGUAGE: "en_GB:en",
    LESSCLOSE: "/usr/bin/lesspipe %s %s",
    LESSOPEN: "| /usr/bin/lesspipe %s",
    LOGNAME: "tim",
    MANAGERPID: "1501",
    NVM_BIN: "/home/tim/.nvm/versions/node/v20.9.0/bin",
    NVM_DIR: "/home/tim/.nvm",
    NVM_INC: "/home/tim/.nvm/versions/node/v20.9.0/include/node",
    ORIGINAL_XDG_CURRENT_DESKTOP: "ubuntu:GNOME",
    PATH: "/home/tim/.nvm/versions/node/v20.9.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin",
    PWD: "/home/tim",
    QT_ACCESSIBILITY: "1",
    QT_IM_MODULE: "ibus",
    SESSION_MANAGER: "local/tim-ubuntu:@/tmp/.ICE-unix/1647,unix/tim-ubuntu:/tmp/.ICE-unix/1647",
    SHELL: "/bin/bash",
    SHLVL: "0",
    SSH_AGENT_LAUNCHER: "gnome-keyring",
    SSH_AUTH_SOCK: "/run/user/1000/keyring/ssh",
    SYSTEMD_EXEC_PID: "1680",
    USER: "tim",
    USERNAME: "tim",
    VSCODE_AMD_ENTRYPOINT: "vs/workbench/api/node/extensionHostProcess",
    VSCODE_CRASH_REPORTER_PROCESS_TYPE: "extensionHost",
    VSCODE_CWD: "/home/tim",
    VSCODE_HANDLES_UNCAUGHT_ERRORS: "true",
    VSCODE_IPC_HOOK: "/run/user/1000/vscode-0c218de8-1.86-main.sock",
    VSCODE_NLS_CONFIG: "{\"locale\":\"en-gb\",\"osLocale\":\"en-gb\",\"availableLanguages\":{},\"_languagePackSupport\":true}",
    VSCODE_PID: "17231",
    WAYLAND_DISPLAY: "wayland-0",
    XAUTHORITY: "/run/user/1000/.mutter-Xwaylandauth.8XB3H2",
    XDG_CONFIG_DIRS: "/etc/xdg/xdg-ubuntu:/etc/xdg",
    XDG_CURRENT_DESKTOP: "Unity",
    XDG_DATA_DIRS: "/usr/share/ubuntu:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop",
    XDG_MENU_PREFIX: "gnome-",
    XDG_RUNTIME_DIR: "/run/user/1000",
    XDG_SESSION_CLASS: "user",
    XDG_SESSION_DESKTOP: "ubuntu",
    XDG_SESSION_TYPE: "wayland",
    XMODIFIERS: "@im=ibus",
    _: "/usr/share/code/code",
    ELECTRON_RUN_AS_NODE: "1",
    VSCODE_L10N_BUNDLE_LOCATION: "",
  },
}
```ts
import type {
  SpawnOptionsWithStdioTuple,
  StdioNull,
  StdioPipe,
} from "child_process";
import { spawn } from "child_process";
```

```ts
export function execWithLog(
  command: string,
  args: string[],
  options: Partial<
    SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>
  > = {},
  log?: (s: string) => void,
  error?: (s: string) => void,
) {
  const child = spawn(command, args, {
    stdio: ["ignore", "pipe", "pipe"],
    shell: isWindows,
    // https://nodejs.org/api/child_process.html#child_process_options_detached
    detached: process.platform !== "win32",
    ...options,
  });
```



## export function runVitestWithApi

(
  vitest: { cmd: string; args: string[] },
  workspace: string,
  handlers: Handlers,
  customStartProcess?: (config: StartConfig) => void,
  cancellationToken?: CancellationToken,
): Promise<string> 

### vitest
{
  cmd: "npx",
  args: [
    "vitest",
    "--api.host",
    "127.0.0.1",
    "/home/tim/Documents/vscode/git-hub/vitest-visual-studio-code-extension/samples/basic/test/add.test.ts",
    "-t",
    "addition add",
  ],
}

### handlers
{
  log: (line) => {
    log2.info(`${filterColorFormatOutput(line.trimEnd())}\r
    `);
    outputs.push(filterColorFormatOutput(line));
  },
  onFinished: (files) => {
    if (files == null) {
      if (!cancellation?.isCancellationRequested)
        handleError();
      return;
    }
    testResultFiles = files;
  },
  onCollected: (files) => {
    files && onUpdate && onUpdate(files);
  },
  onUpdate: (files) => {
    syncFilesTestStatus(
      files,
      discover,
      ctrl,
      run,
      false,
      false,
      finishedTests
    );
  },
}

### customStartProcess
undefined

### cancellationToken
{
  a: false,
  b: {
    w: 1,
    f: undefined,
    g: undefined,
    j: undefined,
    u: undefined,
    q: function(this.g&&this.w>this.g.threshold*3)return console.warn(`[${this.g.name}] REFUSES to accept new listeners because it exceeded its threshold by far`),f.$Tc.None;if(this.m)return f.$Tc.None;y&&(m=m.bind(y));const N=new g(m);let U,T;this.g&&this.w>=Math.ceil(this.g.threshold*.2)&&(N.stack=S.create(),U=this.g.check(N.stack,this.w+1)),p&&(N.stack=T??S.create()),this.t?this.t instanceof g?(this.u??=new a,this.t=[this.t,N]):this.t.push(N):(this.f?.onWillAddFirstListener?.(this),this.t=N,this.f?.onDidAddFirstListener?.(this)),this.w++;const O=(0,f.$Rc)(()=>{U?.(),this.x(N)});return L instanceof f.$Sc?L.add(O):Array.isArray(L)&&L.push(O),O},
    t: {
      value: function () { [native code] },
      id: 929,
    },
  },
}

### workspace
"/home/tim/Documents/vscode/git-hub/vitest-visual-studio-code-extension/samples/basic"



## export class TestRunner 

  constructor(
    private workspacePath: string,
    private defaultVitestCommand: { cmd: string; args: string[] } | undefined,
  )

###   async scheduleRun

(
    testFile: string[] | undefined,
    testNamePattern: string | undefined,
    log: { info: (msg: string) => void; error: (line: string) => void } = {
      info: () => {},
      error: console.error,
    },
    workspaceEnv: Record<string, string> = {},
    vitestCommand: { cmd: string; args: string[] } = this.defaultVitestCommand
      ? this.defaultVitestCommand
      : { cmd: "npx", args: ["vitest"] },
    updateSnapshot = false,
    onUpdate?: (files: File[]) => void,
    customStartProcess?: (config: StartConfig) => void,
    cancellation?: CancellationToken,
  ): Promise<{ testResultFiles: File[]; output: string }> 

