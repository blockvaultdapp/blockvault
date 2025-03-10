import React from 'react';
import { useState } from 'react';
import vaultLight from '../images/vaultLight.svg';
import Typical from 'react-typical';
import ImageKey from '../pages/imagekey';

export default function Vault() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <section className="relative h-screen">
        <div className="flex flex-col-reverse items-center gap-12 sm:flex-row">
          <div></div>
          <div className="flex flex-col items-center flex-1 lg:items-start">
            <h1 className="mb-6 text-3xl font-extrabold text-center align-middle sm:text-left sm:text-5xl dark:text-nord6">
              BlockVault
            </h1>
            <h1 className="mb-6 text-3xl font-extrabold text-center align-middle sm:text-left sm:text-5xl dark:text-nord6">
              Keep your data
            </h1>
            <span className="mb-8 text-3xl font-extrabold text-center align-middle sm:text-left font-mr sm:text-5xl dark:text-nord6">
              <Typical /*https://dev.to/davidamunga/how-to-create-a-text-typing-animation-effect-in-react-49gl */
                steps={[
                  ' ',
                  1000,
                  'Private',
                  1000,
                  ' ',
                  1000,
                  'Secure',
                  1000,
                  ' ',
                  1000,
                ]}
                loop={Infinity}
              />
            </span>
            <div>
              <div className="flex flex-wrap justify-center gap-6">
                {/* <Link
                exact
                to="./dashboard"
                className="bg-nord1 text-white py-4 px-10 rounded-full text-8 shadow-xl hover:bg-transparent border-2 border-nord1 hover:text-nord1 hover:scale-110% duration-200 dark:border-nord0 dark:hover:bg-nord6 dark:hover:text-nord0 dark:border-2"
              >
                Enter App
              </Link> */}
                <p
                  className="bg-nord1 text-white py-4 px-10 rounded-full text-8 shadow-xl hover:bg-transparent border-2 border-nord1 hover:text-nord1 hover:scale-110% duration-200 dark:border-nord0 dark:hover:bg-nord6 dark:hover:text-nord0 dark:border-2"
                  onClick={() => setButtonPopup(true)}
                >
                  Enter App
                </p>
                <ImageKey
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                ></ImageKey>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-1">
            <img className="h-120" src={vaultLight} alt="vault" />
          </div>
        </div>
      </section>
    </>
  );
}
