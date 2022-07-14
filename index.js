import hash from 'object-hash'

export const shouldSetUserId = ([sequence, userId], [newSequence, newUserId]) =>
  newSequence > sequence || (newSequence === sequence && newUserId > userId)

export const shouldSetUserIdAndHash = (
  [sequence, userId],
  value,
  [newSequence, newUserId],
  newValue
) =>
  newSequence > sequence ||
  (newSequence === sequence &&
    (newUserId > userId ||
      (newUserId === userId && hash(newValue) > hash(value))))

export const shouldSetHash = (sequence, value, newSequence, newValue) =>
  newSequence > sequence ||
  (newSequence === sequence && hash(newValue) > hash(value))
