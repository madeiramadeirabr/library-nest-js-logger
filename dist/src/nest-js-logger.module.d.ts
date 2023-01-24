import { DynamicModule } from '@nestjs/common';
import { WinstonModuleOptions } from 'nest-winston';
export declare class NestJsLoggerModule {
    static forRoot(options?: WinstonModuleOptions): DynamicModule;
}
