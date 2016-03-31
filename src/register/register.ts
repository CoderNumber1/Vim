"use strict";

export class Register {
    static _registers:string[] = [];
    
    static setRegisterValue(key:string, value: string) {
      Register._registers[key] = value;    
    }
    
    static getRegisterValue(key:string): string {
        return Register._registers[key];
    }
}