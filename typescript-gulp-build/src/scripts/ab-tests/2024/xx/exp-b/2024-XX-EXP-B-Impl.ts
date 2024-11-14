import { CommonFeatures } from "../common/common-features";

export class Impl_2024_XX_EXP_B extends CommonFeatures {
  constructor() {
    super("2024-XX-EXP-B");
  }

  getPerimeter(): void {
    console.log("Woof!");
  }

  greet(name: string) {
    this.logger.info(`Welcome user ${name}`);
    this.init();
  }
}
