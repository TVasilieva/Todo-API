type ReturnedAction<Action, Payload> = { type: Action; payload?: Payload };

export const actionCreator = <Action = string, Payload = any>(
  type: Action,
  payload?: Payload
): ReturnedAction<Action, Payload> => ({ type, payload });
