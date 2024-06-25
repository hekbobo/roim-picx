import { ThrowableRouter } from 'itty-router-extras';

export const router = ThrowableRouter<Request>({ base: '/rest' });

router.get('/hello', async (req) => {
    return new Response('Hello world');
})
