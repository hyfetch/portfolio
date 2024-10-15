import React from 'react';

export default function Verification() {
  const pgpKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZlom1hYJKwYBBAHaRw8BAQdA+WCeTngZqJQ4dzIH4rgDPj6tBnqujncLzFpg
lqYMjom0Fm1zdHJ2IDxtc3RydkBtc3Rydi5wbD6ImQQTFgoAQRYhBNJMdctnMdNa
Mh7nJJFR6igSxH+7BQJmWibWAhsDBQkFoxNKBQsJCAcCAiICBhUKCQgLAgQWAgMB
Ah4HAheAAAoJEJFR6igSxH+7fGgA/1QveuAzQ3EbD8ut2li72JKZtAYwXdlDBTU8
l6cz9uTqAP4ygLqULmZA/BNftqqibIzjMw4HE2S6JWymXbshTlh0Bbg4BGZaJtYS
CisGAQQBl1UBBQEBB0AAD5q8ocb/Hwpr1m1nZY3cBWzM06HFXq+AarQrkTJtfgMB
CAeIfgQYFgoAJhYhBNJMdctnMdNaMh7nJJFR6igSxH+7BQJmWibWAhsMBQkFoxNK
AAoJEJFR6igSxH+7a2ABAMSokfj68wn5F4A022oHQXFuQgq7piLs5H/R6DNIcz4H
AQCiWkUwRRDhhisi4SGVFbtfVt1De8VyQ124yloW2IoUDg==
=SyRG
-----END PGP PUBLIC KEY BLOCK-----
  `;



  return (
    <div>
      <h2>Verification methods</h2>
      <p>To put it simply, there were some bad actors in past, impersonating me, you can always verify me with 2 ways, my pgp key</p>
      <details>
        <summary>Click to expand the PGP Key</summary>
        <div>
          <pre>
            <code>
              {pgpKey}
            </code>
          </pre>
        </div>
        </details>
        <div>
            <p>And my discord accounts.</p>
            <details>
                <summary>Click to expand the list</summary>
                <div>
                    <pre>
                        <code>
                            mstrv <br></br>
                            alsomstrv
                        </code>
                    </pre>
                </div>
            </details>
        </div>
        
        <p>Or, you can check if mstrv.pl is bound to an a discord account, which should look like image below.</p>
        <details>
          <summary>Click to expand the image</summary>
        <img src="img/misc/VerificationOptionThree.png" />
        <p>yes, i am well aware that this is kinda broken on mobile devices, CBA to fix it</p>
        </details>

    </div>
  );
}