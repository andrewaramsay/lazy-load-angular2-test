type RequireEnsureCallback = (require: NodeRequire) => void;

interface NodeRequire {
    ensure: (fileName: string, cb: RequireEnsureCallback) => void;
}
