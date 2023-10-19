import { test } from "node:test";
import assert from "node:assert/strict";
import { dotenv } from './dotenv';

test("dotenv read file", async () => {
    const promesa = dotenv();
    promesa
        .then(data => {
            assert.ok(data.length > 0);
        })
        .catch(err => {
            assert.ok(false);
        });
});

test("dotenv find token", async () => {
    const promesa = dotenv();
    promesa
        .then(data => {
            if (!Array.isArray(data)) {
                assert.ok(false);
            } else if (data.length < 1) {
                assert.ok(false);
            } else {
                const found = data.find(item => item.TOKEN === '123ABC');
                if (found) {
                    assert.ok(true);
                } else {
                    assert.ok(false);
                }
            }
        })
        .catch(err => {
            assert.ok(false);
        });
});