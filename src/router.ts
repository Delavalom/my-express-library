const proto =  () => {

    const opts = options || {}
    
    router(req, res, next) {
        router.handle(req, res, next) {
        }
    }
    
    setPrototypeOf(router, proto)
    router.params = {}
    router._params = []
    router.caseSensitive;
    router.mergeParams = opts.mergeParams;
    router.strict = opts.strict;
    router.stack = []; //really important property

    return router;
}