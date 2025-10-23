/* eslint-disable @typescript-eslint/no-explicit-any */
import Prism from "prismjs";

(globalThis as any).Prism = Prism;

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-go";
import "prismjs/components/prism-java";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-python";

export default (globalThis as any).Prism;
