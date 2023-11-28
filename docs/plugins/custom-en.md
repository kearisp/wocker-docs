# Custom plugin


```typescript
import {
    Injectable,
    AppConfigService,
    Plugin,
    Cli
} from "@wocker/core";


@Injectable()
export default class CustomPlugin extends Plugin {
    public constructor(
        protected appConfigService: AppConfigService
    ) {
        super();
    }

    public install(cli: Cli) {
        super.install(cli);

        cli.command("custom:command")
            .action(() => this.command());
    }

    public async command() {
        return "result";
    }
}
```
