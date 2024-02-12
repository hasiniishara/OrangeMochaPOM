class SystemUtil {
    get sytemUrl() {return 'https://devmini-trials711.orangehrmlive.com/auth/seamlessLogin'; }

    openSystem(){
        browser.url(this.sytemUrl);
    }
}

module.exports = new SystemUtil();