------------------------------------------------
-- Block Table
------------------------------------------------
CREATE TABLE block
(
    height BIGINT UNIQUE PRIMARY KEY,
    chain_id VARCHAR(50) NOT NULL,
    hash TEXT NOT NULL UNIQUE,
    num_txs INTEGER DEFAULT 0,
    proposer_address TEXT NOT NULL DEFAULT 0,
    status VARCHAR(15) NOT NULL DEFAULT 'incomplete' CHECK (status IN ('incomplete', 'in_progress', 'complete')),
    timestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
