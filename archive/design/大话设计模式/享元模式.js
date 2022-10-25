"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    get value() {
        return this.name;
    }
}
class Website {
}
class conWebSite extends Website {
    constructor(name) {
        super();
        this.name = name;
    }
    Use(user) {
        console.log(`网站分类：${this.name}---用户：${user.value}`);
    }
}
class webSiteFactory {
    constructor() {
        this.list = new Map();
    }
    getWebsiteCategory(key) {
        if (!this.list.has(key)) {
            this.list.set(key, new conWebSite(key));
        }
        return this.list.get(key);
    }
    getWebsiteCount() {
        return this.list.size;
    }
}
const webF = new webSiteFactory();
const fx = webF.getWebsiteCategory('网站模板');
fx.Use(new User('小草'));
const fx2 = webF.getWebsiteCategory('网站模板');
fx.Use(new User('小草2'));
console.log(webF.getWebsiteCount());
