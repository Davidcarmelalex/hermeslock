/**
 * HermesLock — Encryption Tests
 * Verifies the E2E encryption roundtrip works correctly.
 */
import { generateKey, encryptMessage, decryptMessage } from '../lib/crypto';

describe('E2E Encryption', () => {
  it('encrypts and decrypts correctly', async () => {
    const key = await generateKey();
    const message = 'Top secret message';
    const { ciphertext, iv } = await encryptMessage(message, key);
    const decrypted = await decryptMessage(ciphertext, iv, key);
    expect(decrypted).toBe(message);
  });

  it('produces different ciphertext each time (unique IV)', async () => {
    const key = await generateKey();
    const { ciphertext: c1 } = await encryptMessage('hello', key);
    const { ciphertext: c2 } = await encryptMessage('hello', key);
    expect(c1).not.toBe(c2);
  });
});
