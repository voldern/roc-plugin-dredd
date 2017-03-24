import createRouter from 'koa-router';

export default function () {
    const router = createRouter();

    router.get('/api', function *() {
        this.response.body = { data: new Date };
    });

    router.get('/list', function *() {
        let list = [ {counter:1} ,  {counter:1},  {counter:1},  {counter:1}];
        this.response.body = { list };
    });

    return [router.routes()];
}
