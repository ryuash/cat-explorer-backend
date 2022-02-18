import { db } from 'parser/db';

export const initialReset = async () => {
  // reset inprogress blocks that were finished halfway
  await db.query(
    "UPDATE block SET status = 'incomplete' WHERE status = 'in_progress'",
  );

  // reset inprogress transactions that were finished halfway
  await db.query(
    "UPDATE transaction SET status = 'incomplete' WHERE status = 'in_progress'",
  );
};
