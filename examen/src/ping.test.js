import { describe, it, test } from "node:test";
import assert from "node:assert/strict";
import { ping } from './ping';

test("Ping correct host and port", async () => {
    const host = "172.217.173.46";
    const port = "443";
    try {
        const message = await ping(host, port);
        const regex = new RegExp(`${host} ${port} [+-]?([0-9]*[.])?[0-9]+ milliseconds`);
        const found = message.match(regex);
        assert.ok(found != null);
    } catch (err) {
        assert.ok(false);
    }
});

test("Ping false host and port", async () => {
    const host = "172.217.173.46";
    const port = "21";
    try {
        const message = await ping(host, port);
        assert.ok(false);
    } catch (err) {
        assert.ok(true);
    }
});
