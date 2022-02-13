------------------------------------------------
-- Block Table
------------------------------------------------
CREATE TABLE block
(
    height BIGINT,
    hash TEXT NOT NULL DEFAULT '',
    chain_id VARCHAR(50) NOT NULL DEFAULT 'unknown',
    num_txs INT DEFAULT 0,
    proposer TEXT NOT NULL DEFAULT '',
    status VARCHAR(15) NOT NULL DEFAULT 'incomplete' CHECK (status IN ('incomplete', 'in_progress', 'complete')),
    timestamp TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()::timestamp
);
------------------------------------------------
-- Index on height for faster search
-- Index on chain_id in case the database has data from previous chains
-- Index on status for faster search / reset
------------------------------------------------
ALTER TABLE block ADD UNIQUE (height, chain_id);
CREATE INDEX block_height_index ON block (height);
CREATE INDEX block_chain_id_index ON block (chain_id);
CREATE INDEX block_status_index ON block (status) WHERE status <> 'complete';
ALTER TABLE block SET (
  autovacuum_vacuum_scale_factor = 0,
  autovacuum_analyze_scale_factor = 0,
  autovacuum_vacuum_threshold = 10000,
  autovacuum_analyze_threshold = 10000
);


------------------------------------------------
-- Transaction Table
------------------------------------------------
CREATE TABLE transaction
(
  hash TEXT NOT NULL,
  height BIGINT NOT NULL,
  success BOOLEAN NOT NULL,
  memo TEXT,
  messages JSONB NOT NULL DEFAULT '[]'::JSONB,
  fee JSONB NOT NULL DEFAULT '{}'::JSONB,
  gas_wanted BIGINT DEFAULT 0,
  gas_used BIGINT DEFAULT 0,
  raw_log TEXT,
  logs JSONB NOT NULL DEFAULT '[]'::JSONB,
  status VARCHAR(15) NOT NULL DEFAULT 'incomplete' CHECK (status IN ('incomplete', 'in_progress', 'complete')),
  partition_id INT NOT NULL,
  CHECK (height / 1000 = partition_id)
) PARTITION BY LIST(partition_id);
------------------------------------------------
-- Index on height for faster search
-- Index on chain_id in case the database has data from previous chains
-- Index on status for faster search / reset
------------------------------------------------
ALTER TABLE transaction ADD UNIQUE (hash, partition_id);
CREATE INDEX transaction_hash_index ON transaction (hash);
CREATE INDEX transaction_height_index ON transaction (height);
CREATE INDEX transaction_status_index ON transaction (status) WHERE status <> 'complete';
