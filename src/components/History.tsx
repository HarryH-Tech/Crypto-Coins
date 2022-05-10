import "../styles/History.scss";

function History(props: any) {
  return (
    <div>
      <h1 id="title">A Short History of Blockchains</h1>
      <p id="history-text">
        The concept of a blockchain has been around for decades, first being
        described by David Chaum in his 1982 dissertation{" "}
        <a
          href="https://nakamotoinstitute.org/static/docs/computer-systems-by-mutually-suspicious-groups.pdf"
          target="_blank"
        >
          Computer Systems Established, Maintained, and Trusted by Mutually
          Suspicious Groups".{" "}
        </a>{" "}
        He wanted to create a practical solution for time-stamping digital
        documents so that they could not be modified anonymously after they had
        been created. The idea of a blockchain became more mainstream in 2008
        however with the creation of Bitcoin by an anonymous group or individual
        known as "Satoshi Nakamoto".
        <br />
        <br />
        Although many credit Satoshi with the creation of the blockchain, his
        creation built upon decades of prior work such as that done in 1991 by
        Stuart Haber and W. Scott Stornetta who created a system whereby
        document timestamps could not be tampered with and later added{" "}
        <a
          href="https://www.investopedia.com/terms/m/merkle-tree.asp#:~:text=A%20Merkle%20tree%20is%20a,as%20%22binary%20hash%20trees.%22"
          target="_blank"
        >
          {" "}
          Merkle Trees
        </a>{" "}
        to the system to improve its efficiency. Satoshi however did create the
        first decentralized blockchain and was the first to use the words
        'block' and 'chain' to name the concept although it wasn't until 2016
        that the 2 words were put together.
        <br />
        <br />
        Although today most people have heard the word 'Blockchain' thanks to
        the popularization of cryptocurrencies, relatively few people actually
        understand what it is and how it works. Even as recently as 2018 only 1%
        of CIOs said there was any kind of blockchain adoption within their
        organisation and just 5% of CIOs beleived blockchain would be a 'game
        changer' within the financial services industry.
        <br />
        <br />
        One of the major innovations relating to blockchain technology was the
        concept of the "smart contract" embodied within a second generation
        blockchain system known as
        <a href="https://en.wikipedia.org/wiki/Ethereum" target="_blank">
          Ethereum
        </a>
        .
        <br />
        Blockchains offer the opportunity to greatly improve upon the current
        state of the payments industry through improved payment verification and
        traceability. Certain cryptocurrencies less well knwon that Bitcoin but
        built upon blockchains are also allowing people in developing nations to
        send remitance payments at a fraction of the cost they coud in the past
        when they had to do it via centralized institutions. To read more aout
        the history of blockchains click{" "}
        <a
          href="https://hbr.org/2017/02/a-brief-history-of-blockchain"
          target="_blank"
        >
          here
        </a>
      </p>
    </div>
  );
}

export default History;
