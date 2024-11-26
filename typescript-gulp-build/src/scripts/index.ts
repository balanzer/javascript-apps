/**
 * index.ts - to test features.
 */

import { Impl_2024_XX_EXP_B } from "./ab-tests/2024/xx/exp-b/2024-XX-EXP-B-Impl";
import { Logger } from "./common/logger/Logger";

const logger = new Logger("index");

/** Test Impl - start */

const impl = new Impl_2024_XX_EXP_B();
impl.greet("my-name");
