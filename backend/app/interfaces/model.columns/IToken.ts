/**
 * Represents the JWT Session key
 */
export interface IToken {
  /**
   * The actual JWT Session string
   */
  token: string;
  
  /**
   * Id of the user that owns this session string
   */
  userId?: string;
}

export default IToken;
