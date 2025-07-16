const cookie = {
    has(key) {
        return document.cookie
            .split(';')
            .some(item => item.trim().startsWith(`${key}=`));
    },
    
    get(key, def = null) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${key}=`);
        if (parts.length === 2) {
            return decodeURIComponent(parts.pop().split(';').shift());
        }
        return def;
    },
    
    set(key, value, options = {}) {
        const {
            expires = null,
            max_age = null,
            path = '/',
            domain = null,
            secure = true,
            same_site = 'Lax'
        } = options;
        
        let cookieString = `${key}=${encodeURIComponent(value)}`;
        
        if (expires) {
            if (expires instanceof Date) {
                cookieString += `; expires=${expires.toUTCString()}`;
            } else if (typeof expires === 'number') {
                const date = new Date();
                date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
                cookieString += `; expires=${date.toUTCString()}`;
            }
        }
        
        if (max_age !== null) {
            cookieString += `; max-age=${max_age}`;
        }
        
        if (path) {
            cookieString += `; path=${path}`;
        }
        
        if (domain) {
            cookieString += `; domain=${domain}`;
        }
        
        if (secure) {
            cookieString += `; secure`;
        }
        
        if (same_site) {
            cookieString += `; samesite=${same_site}`;
        }
        
        document.cookie = cookieString;
    },
    
    unset(key, options = {}) {
        const { path = '/', domain = null } = options;
        
        let cookieString = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        
        if (path) {
            cookieString += `; path=${path}`;
        }
        
        if (domain) {
            cookieString += `; domain=${domain}`;
        }
        
        document.cookie = cookieString;
    },
    
    clear() {
        document.cookie.split(';').forEach(cookie => {
            const name = cookie.split('=')[0].trim();
            if (name) this.unset(name);
        });
    }
};

export { cookie };