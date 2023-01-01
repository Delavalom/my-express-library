import type { IncomingMessage, ServerResponse } from "http"

const createApplication = () => {
    const app = (req: IncomingMessage, res: ServerResponse, next: unknown) => {}
    return app
}

export default createApplication