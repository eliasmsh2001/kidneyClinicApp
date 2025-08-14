
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model patient
 * 
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>
/**
 * Model file
 * 
 */
export type file = $Result.DefaultSelection<Prisma.$filePayload>
/**
 * Model session
 * 
 */
export type session = $Result.DefaultSelection<Prisma.$sessionPayload>
/**
 * Model sessionHours
 * 
 */
export type sessionHours = $Result.DefaultSelection<Prisma.$sessionHoursPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.patientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **file** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.fileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.sessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionHours`: Exposes CRUD operations for the **sessionHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionHours
    * const sessionHours = await prisma.sessionHours.findMany()
    * ```
    */
  get sessionHours(): Prisma.sessionHoursDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    patient: 'patient',
    file: 'file',
    session: 'session',
    sessionHours: 'sessionHours'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "patient" | "file" | "session" | "sessionHours"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>
        fields: Prisma.patientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      file: {
        payload: Prisma.$filePayload<ExtArgs>
        fields: Prisma.fileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findFirst: {
            args: Prisma.fileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findMany: {
            args: Prisma.fileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>[]
          }
          create: {
            args: Prisma.fileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          createMany: {
            args: Prisma.fileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          update: {
            args: Prisma.fileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          deleteMany: {
            args: Prisma.fileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.fileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.fileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      session: {
        payload: Prisma.$sessionPayload<ExtArgs>
        fields: Prisma.sessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findFirst: {
            args: Prisma.sessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          findMany: {
            args: Prisma.sessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>[]
          }
          create: {
            args: Prisma.sessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          createMany: {
            args: Prisma.sessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          update: {
            args: Prisma.sessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          deleteMany: {
            args: Prisma.sessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.sessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      sessionHours: {
        payload: Prisma.$sessionHoursPayload<ExtArgs>
        fields: Prisma.sessionHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload>
          }
          findFirst: {
            args: Prisma.sessionHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload>
          }
          findMany: {
            args: Prisma.sessionHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload>[]
          }
          create: {
            args: Prisma.sessionHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload>
          }
          createMany: {
            args: Prisma.sessionHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sessionHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload>
          }
          update: {
            args: Prisma.sessionHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload>
          }
          deleteMany: {
            args: Prisma.sessionHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sessionHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionHoursPayload>
          }
          aggregate: {
            args: Prisma.SessionHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionHours>
          }
          groupBy: {
            args: Prisma.sessionHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionHoursCountArgs<ExtArgs>
            result: $Utils.Optional<SessionHoursCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    patient?: patientOmit
    file?: fileOmit
    session?: sessionOmit
    sessionHours?: sessionHoursOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    files: number
    sessions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | PatientCountOutputTypeCountFilesArgs
    sessions?: boolean | PatientCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fileWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    hours: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hours?: boolean | SessionCountOutputTypeCountHoursArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionHoursWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    usersecret: string | null
    authority: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    usersecret: string | null
    authority: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    usersecret: number
    authority: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    usersecret?: true
    authority?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    usersecret: string
    authority: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    usersecret?: boolean
    authority?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    usersecret?: boolean
    authority?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "usersecret" | "authority", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      usersecret: string
      authority: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly usersecret: FieldRef<"user", 'String'>
    readonly authority: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    patientName: string | null
    residentialId: string | null
    age: string | null
    birthDate: string | null
    phoneNumber: string | null
    address: string | null
    bloodType: string | null
    hight: string | null
    weight: string | null
    social: string | null
    gender: string | null
    sicknessCause: string | null
    firstEverTreatment: string | null
    firstTreatmentHere: string | null
    note: string | null
    filterNo: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    patientName: string | null
    residentialId: string | null
    age: string | null
    birthDate: string | null
    phoneNumber: string | null
    address: string | null
    bloodType: string | null
    hight: string | null
    weight: string | null
    social: string | null
    gender: string | null
    sicknessCause: string | null
    firstEverTreatment: string | null
    firstTreatmentHere: string | null
    note: string | null
    filterNo: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    patientName: number
    residentialId: number
    age: number
    birthDate: number
    phoneNumber: number
    address: number
    bloodType: number
    hight: number
    weight: number
    social: number
    gender: number
    sicknessCause: number
    firstEverTreatment: number
    firstTreatmentHere: number
    note: number
    filterNo: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    patientName?: true
    residentialId?: true
    age?: true
    birthDate?: true
    phoneNumber?: true
    address?: true
    bloodType?: true
    hight?: true
    weight?: true
    social?: true
    gender?: true
    sicknessCause?: true
    firstEverTreatment?: true
    firstTreatmentHere?: true
    note?: true
    filterNo?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    patientName?: true
    residentialId?: true
    age?: true
    birthDate?: true
    phoneNumber?: true
    address?: true
    bloodType?: true
    hight?: true
    weight?: true
    social?: true
    gender?: true
    sicknessCause?: true
    firstEverTreatment?: true
    firstTreatmentHere?: true
    note?: true
    filterNo?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    patientName?: true
    residentialId?: true
    age?: true
    birthDate?: true
    phoneNumber?: true
    address?: true
    bloodType?: true
    hight?: true
    weight?: true
    social?: true
    gender?: true
    sicknessCause?: true
    firstEverTreatment?: true
    firstTreatmentHere?: true
    note?: true
    filterNo?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: patientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    patientName: string | null
    residentialId: string | null
    age: string | null
    birthDate: string | null
    phoneNumber: string | null
    address: string | null
    bloodType: string | null
    hight: string | null
    weight: string | null
    social: string | null
    gender: string | null
    sicknessCause: string | null
    firstEverTreatment: string | null
    firstTreatmentHere: string | null
    note: string | null
    filterNo: string | null
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientName?: boolean
    residentialId?: boolean
    age?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    address?: boolean
    bloodType?: boolean
    hight?: boolean
    weight?: boolean
    social?: boolean
    gender?: boolean
    sicknessCause?: boolean
    firstEverTreatment?: boolean
    firstTreatmentHere?: boolean
    note?: boolean
    filterNo?: boolean
    files?: boolean | patient$filesArgs<ExtArgs>
    sessions?: boolean | patient$sessionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type patientSelectScalar = {
    id?: boolean
    patientName?: boolean
    residentialId?: boolean
    age?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    address?: boolean
    bloodType?: boolean
    hight?: boolean
    weight?: boolean
    social?: boolean
    gender?: boolean
    sicknessCause?: boolean
    firstEverTreatment?: boolean
    firstTreatmentHere?: boolean
    note?: boolean
    filterNo?: boolean
  }

  export type patientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientName" | "residentialId" | "age" | "birthDate" | "phoneNumber" | "address" | "bloodType" | "hight" | "weight" | "social" | "gender" | "sicknessCause" | "firstEverTreatment" | "firstTreatmentHere" | "note" | "filterNo", ExtArgs["result"]["patient"]>
  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | patient$filesArgs<ExtArgs>
    sessions?: boolean | patient$sessionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patient"
    objects: {
      files: Prisma.$filePayload<ExtArgs>[]
      sessions: Prisma.$sessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientName: string | null
      residentialId: string | null
      age: string | null
      birthDate: string | null
      phoneNumber: string | null
      address: string | null
      bloodType: string | null
      hight: string | null
      weight: string | null
      social: string | null
      gender: string | null
      sicknessCause: string | null
      firstEverTreatment: string | null
      firstTreatmentHere: string | null
      note: string | null
      filterNo: string | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<Prisma.$patientPayload, S>

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient'], meta: { name: 'patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientFindUniqueArgs>(args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs>(args: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientFindFirstArgs>(args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs>(args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patientFindManyArgs>(args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends patientCreateArgs>(args: SelectSubset<T, patientCreateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientCreateManyArgs>(args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends patientDeleteArgs>(args: SelectSubset<T, patientDeleteArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientUpdateArgs>(args: SelectSubset<T, patientUpdateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientDeleteManyArgs>(args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientUpdateManyArgs>(args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends patientUpsertArgs>(args: SelectSubset<T, patientUpsertArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patient model
   */
  readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends patient$filesArgs<ExtArgs> = {}>(args?: Subset<T, patient$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends patient$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, patient$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<"patient", 'Int'>
    readonly patientName: FieldRef<"patient", 'String'>
    readonly residentialId: FieldRef<"patient", 'String'>
    readonly age: FieldRef<"patient", 'String'>
    readonly birthDate: FieldRef<"patient", 'String'>
    readonly phoneNumber: FieldRef<"patient", 'String'>
    readonly address: FieldRef<"patient", 'String'>
    readonly bloodType: FieldRef<"patient", 'String'>
    readonly hight: FieldRef<"patient", 'String'>
    readonly weight: FieldRef<"patient", 'String'>
    readonly social: FieldRef<"patient", 'String'>
    readonly gender: FieldRef<"patient", 'String'>
    readonly sicknessCause: FieldRef<"patient", 'String'>
    readonly firstEverTreatment: FieldRef<"patient", 'String'>
    readonly firstTreatmentHere: FieldRef<"patient", 'String'>
    readonly note: FieldRef<"patient", 'String'>
    readonly filterNo: FieldRef<"patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to create a patient.
     */
    data?: XOR<patientCreateInput, patientUncheckedCreateInput>
  }

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>
  }

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patient.files
   */
  export type patient$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    where?: fileWhereInput
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    cursor?: fileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * patient.sessions
   */
  export type patient$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    cursor?: sessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
  }


  /**
   * Model file
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    originalName: string | null
    storedName: string | null
    size: number | null
    mimeType: string | null
    path: string | null
    uploadedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    originalName: string | null
    storedName: string | null
    size: number | null
    mimeType: string | null
    path: string | null
    uploadedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    patientId: number
    originalName: number
    storedName: number
    size: number
    mimeType: number
    path: number
    uploadedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    patientId?: true
    size?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    patientId?: true
    size?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    patientId?: true
    originalName?: true
    storedName?: true
    size?: true
    mimeType?: true
    path?: true
    uploadedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    patientId?: true
    originalName?: true
    storedName?: true
    size?: true
    mimeType?: true
    path?: true
    uploadedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    patientId?: true
    originalName?: true
    storedName?: true
    size?: true
    mimeType?: true
    path?: true
    uploadedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which file to aggregate.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fileWhereInput
    orderBy?: fileOrderByWithAggregationInput | fileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: fileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    patientId: number
    originalName: string
    storedName: string
    size: number
    mimeType: string
    path: string
    uploadedAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends fileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    originalName?: boolean
    storedName?: boolean
    size?: boolean
    mimeType?: boolean
    path?: boolean
    uploadedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>



  export type fileSelectScalar = {
    id?: boolean
    patientId?: boolean
    originalName?: boolean
    storedName?: boolean
    size?: boolean
    mimeType?: boolean
    path?: boolean
    uploadedAt?: boolean
  }

  export type fileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "originalName" | "storedName" | "size" | "mimeType" | "path" | "uploadedAt", ExtArgs["result"]["file"]>
  export type fileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }

  export type $filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "file"
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      originalName: string
      storedName: string
      size: number
      mimeType: string
      path: string
      uploadedAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type fileGetPayload<S extends boolean | null | undefined | fileDefaultArgs> = $Result.GetResult<Prisma.$filePayload, S>

  type fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['file'], meta: { name: 'file' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {fileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fileFindUniqueArgs>(args: SelectSubset<T, fileFindUniqueArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fileFindUniqueOrThrowArgs>(args: SelectSubset<T, fileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fileFindFirstArgs>(args?: SelectSubset<T, fileFindFirstArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fileFindFirstOrThrowArgs>(args?: SelectSubset<T, fileFindFirstOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fileFindManyArgs>(args?: SelectSubset<T, fileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {fileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends fileCreateArgs>(args: SelectSubset<T, fileCreateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {fileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fileCreateManyArgs>(args?: SelectSubset<T, fileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {fileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends fileDeleteArgs>(args: SelectSubset<T, fileDeleteArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {fileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fileUpdateArgs>(args: SelectSubset<T, fileUpdateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {fileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fileDeleteManyArgs>(args?: SelectSubset<T, fileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fileUpdateManyArgs>(args: SelectSubset<T, fileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {fileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends fileUpsertArgs>(args: SelectSubset<T, fileUpsertArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends fileCountArgs>(
      args?: Subset<T, fileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fileGroupByArgs['orderBy'] }
        : { orderBy?: fileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the file model
   */
  readonly fields: fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientDefaultArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the file model
   */
  interface fileFieldRefs {
    readonly id: FieldRef<"file", 'Int'>
    readonly patientId: FieldRef<"file", 'Int'>
    readonly originalName: FieldRef<"file", 'String'>
    readonly storedName: FieldRef<"file", 'String'>
    readonly size: FieldRef<"file", 'Int'>
    readonly mimeType: FieldRef<"file", 'String'>
    readonly path: FieldRef<"file", 'String'>
    readonly uploadedAt: FieldRef<"file", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * file findUnique
   */
  export type fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findUniqueOrThrow
   */
  export type fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findFirst
   */
  export type fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findFirstOrThrow
   */
  export type fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findMany
   */
  export type fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file create
   */
  export type fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The data needed to create a file.
     */
    data: XOR<fileCreateInput, fileUncheckedCreateInput>
  }

  /**
   * file createMany
   */
  export type fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: fileCreateManyInput | fileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * file update
   */
  export type fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The data needed to update a file.
     */
    data: XOR<fileUpdateInput, fileUncheckedUpdateInput>
    /**
     * Choose, which file to update.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file updateMany
   */
  export type fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: fileWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * file upsert
   */
  export type fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The filter to search for the file to update in case it exists.
     */
    where: fileWhereUniqueInput
    /**
     * In case the file found by the `where` argument doesn't exist, create a new file with this data.
     */
    create: XOR<fileCreateInput, fileUncheckedCreateInput>
    /**
     * In case the file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fileUpdateInput, fileUncheckedUpdateInput>
  }

  /**
   * file delete
   */
  export type fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter which file to delete.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file deleteMany
   */
  export type fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: fileWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * file without action
   */
  export type fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
  }


  /**
   * Model session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    date: string | null
    day: string | null
    techName: string | null
    deviceNo: string | null
    sessionType: string | null
    sessionDuration: string | null
    startingTime: string | null
    anticoagulantUsed: string | null
    ktv: string | null
    urr: string | null
    ultrafiltrationRate: string | null
    wtPreHD: string | null
    wtPostHD: string | null
    HDStarting: string | null
    heparinRate: string | null
    heparinBolus: string | null
    UFGoal: string | null
    patientId: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    date: string | null
    day: string | null
    techName: string | null
    deviceNo: string | null
    sessionType: string | null
    sessionDuration: string | null
    startingTime: string | null
    anticoagulantUsed: string | null
    ktv: string | null
    urr: string | null
    ultrafiltrationRate: string | null
    wtPreHD: string | null
    wtPostHD: string | null
    HDStarting: string | null
    heparinRate: string | null
    heparinBolus: string | null
    UFGoal: string | null
    patientId: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    date: number
    day: number
    techName: number
    deviceNo: number
    sessionType: number
    sessionDuration: number
    startingTime: number
    anticoagulantUsed: number
    ktv: number
    urr: number
    ultrafiltrationRate: number
    wtPreHD: number
    wtPostHD: number
    HDStarting: number
    heparinRate: number
    heparinBolus: number
    UFGoal: number
    patientId: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    date?: true
    day?: true
    techName?: true
    deviceNo?: true
    sessionType?: true
    sessionDuration?: true
    startingTime?: true
    anticoagulantUsed?: true
    ktv?: true
    urr?: true
    ultrafiltrationRate?: true
    wtPreHD?: true
    wtPostHD?: true
    HDStarting?: true
    heparinRate?: true
    heparinBolus?: true
    UFGoal?: true
    patientId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    date?: true
    day?: true
    techName?: true
    deviceNo?: true
    sessionType?: true
    sessionDuration?: true
    startingTime?: true
    anticoagulantUsed?: true
    ktv?: true
    urr?: true
    ultrafiltrationRate?: true
    wtPreHD?: true
    wtPostHD?: true
    HDStarting?: true
    heparinRate?: true
    heparinBolus?: true
    UFGoal?: true
    patientId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    date?: true
    day?: true
    techName?: true
    deviceNo?: true
    sessionType?: true
    sessionDuration?: true
    startingTime?: true
    anticoagulantUsed?: true
    ktv?: true
    urr?: true
    ultrafiltrationRate?: true
    wtPreHD?: true
    wtPostHD?: true
    HDStarting?: true
    heparinRate?: true
    heparinBolus?: true
    UFGoal?: true
    patientId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session to aggregate.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type sessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionWhereInput
    orderBy?: sessionOrderByWithAggregationInput | sessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: sessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    date: string | null
    day: string | null
    techName: string | null
    deviceNo: string | null
    sessionType: string | null
    sessionDuration: string | null
    startingTime: string | null
    anticoagulantUsed: string | null
    ktv: string | null
    urr: string | null
    ultrafiltrationRate: string | null
    wtPreHD: string | null
    wtPostHD: string | null
    HDStarting: string | null
    heparinRate: string | null
    heparinBolus: string | null
    UFGoal: string | null
    patientId: number
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends sessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type sessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    day?: boolean
    techName?: boolean
    deviceNo?: boolean
    sessionType?: boolean
    sessionDuration?: boolean
    startingTime?: boolean
    anticoagulantUsed?: boolean
    ktv?: boolean
    urr?: boolean
    ultrafiltrationRate?: boolean
    wtPreHD?: boolean
    wtPostHD?: boolean
    HDStarting?: boolean
    heparinRate?: boolean
    heparinBolus?: boolean
    UFGoal?: boolean
    patientId?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
    hours?: boolean | session$hoursArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type sessionSelectScalar = {
    id?: boolean
    date?: boolean
    day?: boolean
    techName?: boolean
    deviceNo?: boolean
    sessionType?: boolean
    sessionDuration?: boolean
    startingTime?: boolean
    anticoagulantUsed?: boolean
    ktv?: boolean
    urr?: boolean
    ultrafiltrationRate?: boolean
    wtPreHD?: boolean
    wtPostHD?: boolean
    HDStarting?: boolean
    heparinRate?: boolean
    heparinBolus?: boolean
    UFGoal?: boolean
    patientId?: boolean
  }

  export type sessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "day" | "techName" | "deviceNo" | "sessionType" | "sessionDuration" | "startingTime" | "anticoagulantUsed" | "ktv" | "urr" | "ultrafiltrationRate" | "wtPreHD" | "wtPostHD" | "HDStarting" | "heparinRate" | "heparinBolus" | "UFGoal" | "patientId", ExtArgs["result"]["session"]>
  export type sessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
    hours?: boolean | session$hoursArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session"
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>
      hours: Prisma.$sessionHoursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string | null
      day: string | null
      techName: string | null
      deviceNo: string | null
      sessionType: string | null
      sessionDuration: string | null
      startingTime: string | null
      anticoagulantUsed: string | null
      ktv: string | null
      urr: string | null
      ultrafiltrationRate: string | null
      wtPreHD: string | null
      wtPostHD: string | null
      HDStarting: string | null
      heparinRate: string | null
      heparinBolus: string | null
      UFGoal: string | null
      patientId: number
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type sessionGetPayload<S extends boolean | null | undefined | sessionDefaultArgs> = $Result.GetResult<Prisma.$sessionPayload, S>

  type sessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface sessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session'], meta: { name: 'session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {sessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionFindUniqueArgs>(args: SelectSubset<T, sessionFindUniqueArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionFindFirstArgs>(args?: SelectSubset<T, sessionFindFirstArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionFindManyArgs>(args?: SelectSubset<T, sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {sessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends sessionCreateArgs>(args: SelectSubset<T, sessionCreateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionCreateManyArgs>(args?: SelectSubset<T, sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {sessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends sessionDeleteArgs>(args: SelectSubset<T, sessionDeleteArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {sessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionUpdateArgs>(args: SelectSubset<T, sessionUpdateArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionDeleteManyArgs>(args?: SelectSubset<T, sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionUpdateManyArgs>(args: SelectSubset<T, sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {sessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends sessionUpsertArgs>(args: SelectSubset<T, sessionUpsertArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionCountArgs>(
      args?: Subset<T, sessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionGroupByArgs['orderBy'] }
        : { orderBy?: sessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session model
   */
  readonly fields: sessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientDefaultArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hours<T extends session$hoursArgs<ExtArgs> = {}>(args?: Subset<T, session$hoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the session model
   */
  interface sessionFieldRefs {
    readonly id: FieldRef<"session", 'Int'>
    readonly date: FieldRef<"session", 'String'>
    readonly day: FieldRef<"session", 'String'>
    readonly techName: FieldRef<"session", 'String'>
    readonly deviceNo: FieldRef<"session", 'String'>
    readonly sessionType: FieldRef<"session", 'String'>
    readonly sessionDuration: FieldRef<"session", 'String'>
    readonly startingTime: FieldRef<"session", 'String'>
    readonly anticoagulantUsed: FieldRef<"session", 'String'>
    readonly ktv: FieldRef<"session", 'String'>
    readonly urr: FieldRef<"session", 'String'>
    readonly ultrafiltrationRate: FieldRef<"session", 'String'>
    readonly wtPreHD: FieldRef<"session", 'String'>
    readonly wtPostHD: FieldRef<"session", 'String'>
    readonly HDStarting: FieldRef<"session", 'String'>
    readonly heparinRate: FieldRef<"session", 'String'>
    readonly heparinBolus: FieldRef<"session", 'String'>
    readonly UFGoal: FieldRef<"session", 'String'>
    readonly patientId: FieldRef<"session", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * session findUnique
   */
  export type sessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findUniqueOrThrow
   */
  export type sessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session findFirst
   */
  export type sessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findFirstOrThrow
   */
  export type sessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which session to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session findMany
   */
  export type sessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionOrderByWithRelationInput | sessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * session create
   */
  export type sessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to create a session.
     */
    data: XOR<sessionCreateInput, sessionUncheckedCreateInput>
  }

  /**
   * session createMany
   */
  export type sessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionCreateManyInput | sessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * session update
   */
  export type sessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The data needed to update a session.
     */
    data: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
    /**
     * Choose, which session to update.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session updateMany
   */
  export type sessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * session upsert
   */
  export type sessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * The filter to search for the session to update in case it exists.
     */
    where: sessionWhereUniqueInput
    /**
     * In case the session found by the `where` argument doesn't exist, create a new session with this data.
     */
    create: XOR<sessionCreateInput, sessionUncheckedCreateInput>
    /**
     * In case the session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionUpdateInput, sessionUncheckedUpdateInput>
  }

  /**
   * session delete
   */
  export type sessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
    /**
     * Filter which session to delete.
     */
    where: sessionWhereUniqueInput
  }

  /**
   * session deleteMany
   */
  export type sessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * session.hours
   */
  export type session$hoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    where?: sessionHoursWhereInput
    orderBy?: sessionHoursOrderByWithRelationInput | sessionHoursOrderByWithRelationInput[]
    cursor?: sessionHoursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionHoursScalarFieldEnum | SessionHoursScalarFieldEnum[]
  }

  /**
   * session without action
   */
  export type sessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session
     */
    select?: sessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session
     */
    omit?: sessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionInclude<ExtArgs> | null
  }


  /**
   * Model sessionHours
   */

  export type AggregateSessionHours = {
    _count: SessionHoursCountAggregateOutputType | null
    _avg: SessionHoursAvgAggregateOutputType | null
    _sum: SessionHoursSumAggregateOutputType | null
    _min: SessionHoursMinAggregateOutputType | null
    _max: SessionHoursMaxAggregateOutputType | null
  }

  export type SessionHoursAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type SessionHoursSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type SessionHoursMinAggregateOutputType = {
    id: number | null
    time: string | null
    bloodPressure: string | null
    rbs: string | null
    ivf: string | null
    drugs: string | null
    cramps: string | null
    vomitting: string | null
    hematoma: string | null
    chestPain: string | null
    pulseRate: string | null
    temperature: string | null
    sessionId: number | null
  }

  export type SessionHoursMaxAggregateOutputType = {
    id: number | null
    time: string | null
    bloodPressure: string | null
    rbs: string | null
    ivf: string | null
    drugs: string | null
    cramps: string | null
    vomitting: string | null
    hematoma: string | null
    chestPain: string | null
    pulseRate: string | null
    temperature: string | null
    sessionId: number | null
  }

  export type SessionHoursCountAggregateOutputType = {
    id: number
    time: number
    bloodPressure: number
    rbs: number
    ivf: number
    drugs: number
    cramps: number
    vomitting: number
    hematoma: number
    chestPain: number
    pulseRate: number
    temperature: number
    sessionId: number
    _all: number
  }


  export type SessionHoursAvgAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type SessionHoursSumAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type SessionHoursMinAggregateInputType = {
    id?: true
    time?: true
    bloodPressure?: true
    rbs?: true
    ivf?: true
    drugs?: true
    cramps?: true
    vomitting?: true
    hematoma?: true
    chestPain?: true
    pulseRate?: true
    temperature?: true
    sessionId?: true
  }

  export type SessionHoursMaxAggregateInputType = {
    id?: true
    time?: true
    bloodPressure?: true
    rbs?: true
    ivf?: true
    drugs?: true
    cramps?: true
    vomitting?: true
    hematoma?: true
    chestPain?: true
    pulseRate?: true
    temperature?: true
    sessionId?: true
  }

  export type SessionHoursCountAggregateInputType = {
    id?: true
    time?: true
    bloodPressure?: true
    rbs?: true
    ivf?: true
    drugs?: true
    cramps?: true
    vomitting?: true
    hematoma?: true
    chestPain?: true
    pulseRate?: true
    temperature?: true
    sessionId?: true
    _all?: true
  }

  export type SessionHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessionHours to aggregate.
     */
    where?: sessionHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessionHours to fetch.
     */
    orderBy?: sessionHoursOrderByWithRelationInput | sessionHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessionHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessionHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessionHours
    **/
    _count?: true | SessionHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionHoursMaxAggregateInputType
  }

  export type GetSessionHoursAggregateType<T extends SessionHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionHours[P]>
      : GetScalarType<T[P], AggregateSessionHours[P]>
  }




  export type sessionHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionHoursWhereInput
    orderBy?: sessionHoursOrderByWithAggregationInput | sessionHoursOrderByWithAggregationInput[]
    by: SessionHoursScalarFieldEnum[] | SessionHoursScalarFieldEnum
    having?: sessionHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionHoursCountAggregateInputType | true
    _avg?: SessionHoursAvgAggregateInputType
    _sum?: SessionHoursSumAggregateInputType
    _min?: SessionHoursMinAggregateInputType
    _max?: SessionHoursMaxAggregateInputType
  }

  export type SessionHoursGroupByOutputType = {
    id: number
    time: string | null
    bloodPressure: string | null
    rbs: string | null
    ivf: string | null
    drugs: string | null
    cramps: string | null
    vomitting: string | null
    hematoma: string | null
    chestPain: string | null
    pulseRate: string | null
    temperature: string | null
    sessionId: number
    _count: SessionHoursCountAggregateOutputType | null
    _avg: SessionHoursAvgAggregateOutputType | null
    _sum: SessionHoursSumAggregateOutputType | null
    _min: SessionHoursMinAggregateOutputType | null
    _max: SessionHoursMaxAggregateOutputType | null
  }

  type GetSessionHoursGroupByPayload<T extends sessionHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionHoursGroupByOutputType[P]>
            : GetScalarType<T[P], SessionHoursGroupByOutputType[P]>
        }
      >
    >


  export type sessionHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    bloodPressure?: boolean
    rbs?: boolean
    ivf?: boolean
    drugs?: boolean
    cramps?: boolean
    vomitting?: boolean
    hematoma?: boolean
    chestPain?: boolean
    pulseRate?: boolean
    temperature?: boolean
    sessionId?: boolean
    session?: boolean | sessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionHours"]>



  export type sessionHoursSelectScalar = {
    id?: boolean
    time?: boolean
    bloodPressure?: boolean
    rbs?: boolean
    ivf?: boolean
    drugs?: boolean
    cramps?: boolean
    vomitting?: boolean
    hematoma?: boolean
    chestPain?: boolean
    pulseRate?: boolean
    temperature?: boolean
    sessionId?: boolean
  }

  export type sessionHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "bloodPressure" | "rbs" | "ivf" | "drugs" | "cramps" | "vomitting" | "hematoma" | "chestPain" | "pulseRate" | "temperature" | "sessionId", ExtArgs["result"]["sessionHours"]>
  export type sessionHoursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | sessionDefaultArgs<ExtArgs>
  }

  export type $sessionHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessionHours"
    objects: {
      session: Prisma.$sessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      time: string | null
      bloodPressure: string | null
      rbs: string | null
      ivf: string | null
      drugs: string | null
      cramps: string | null
      vomitting: string | null
      hematoma: string | null
      chestPain: string | null
      pulseRate: string | null
      temperature: string | null
      sessionId: number
    }, ExtArgs["result"]["sessionHours"]>
    composites: {}
  }

  type sessionHoursGetPayload<S extends boolean | null | undefined | sessionHoursDefaultArgs> = $Result.GetResult<Prisma.$sessionHoursPayload, S>

  type sessionHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionHoursCountAggregateInputType | true
    }

  export interface sessionHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessionHours'], meta: { name: 'sessionHours' } }
    /**
     * Find zero or one SessionHours that matches the filter.
     * @param {sessionHoursFindUniqueArgs} args - Arguments to find a SessionHours
     * @example
     * // Get one SessionHours
     * const sessionHours = await prisma.sessionHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionHoursFindUniqueArgs>(args: SelectSubset<T, sessionHoursFindUniqueArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionHoursFindUniqueOrThrowArgs} args - Arguments to find a SessionHours
     * @example
     * // Get one SessionHours
     * const sessionHours = await prisma.sessionHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionHoursFindFirstArgs} args - Arguments to find a SessionHours
     * @example
     * // Get one SessionHours
     * const sessionHours = await prisma.sessionHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionHoursFindFirstArgs>(args?: SelectSubset<T, sessionHoursFindFirstArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionHoursFindFirstOrThrowArgs} args - Arguments to find a SessionHours
     * @example
     * // Get one SessionHours
     * const sessionHours = await prisma.sessionHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionHours
     * const sessionHours = await prisma.sessionHours.findMany()
     * 
     * // Get first 10 SessionHours
     * const sessionHours = await prisma.sessionHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionHoursWithIdOnly = await prisma.sessionHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionHoursFindManyArgs>(args?: SelectSubset<T, sessionHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionHours.
     * @param {sessionHoursCreateArgs} args - Arguments to create a SessionHours.
     * @example
     * // Create one SessionHours
     * const SessionHours = await prisma.sessionHours.create({
     *   data: {
     *     // ... data to create a SessionHours
     *   }
     * })
     * 
     */
    create<T extends sessionHoursCreateArgs>(args: SelectSubset<T, sessionHoursCreateArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionHours.
     * @param {sessionHoursCreateManyArgs} args - Arguments to create many SessionHours.
     * @example
     * // Create many SessionHours
     * const sessionHours = await prisma.sessionHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionHoursCreateManyArgs>(args?: SelectSubset<T, sessionHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SessionHours.
     * @param {sessionHoursDeleteArgs} args - Arguments to delete one SessionHours.
     * @example
     * // Delete one SessionHours
     * const SessionHours = await prisma.sessionHours.delete({
     *   where: {
     *     // ... filter to delete one SessionHours
     *   }
     * })
     * 
     */
    delete<T extends sessionHoursDeleteArgs>(args: SelectSubset<T, sessionHoursDeleteArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionHours.
     * @param {sessionHoursUpdateArgs} args - Arguments to update one SessionHours.
     * @example
     * // Update one SessionHours
     * const sessionHours = await prisma.sessionHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionHoursUpdateArgs>(args: SelectSubset<T, sessionHoursUpdateArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionHours.
     * @param {sessionHoursDeleteManyArgs} args - Arguments to filter SessionHours to delete.
     * @example
     * // Delete a few SessionHours
     * const { count } = await prisma.sessionHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionHoursDeleteManyArgs>(args?: SelectSubset<T, sessionHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionHours
     * const sessionHours = await prisma.sessionHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionHoursUpdateManyArgs>(args: SelectSubset<T, sessionHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SessionHours.
     * @param {sessionHoursUpsertArgs} args - Arguments to update or create a SessionHours.
     * @example
     * // Update or create a SessionHours
     * const sessionHours = await prisma.sessionHours.upsert({
     *   create: {
     *     // ... data to create a SessionHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionHours we want to update
     *   }
     * })
     */
    upsert<T extends sessionHoursUpsertArgs>(args: SelectSubset<T, sessionHoursUpsertArgs<ExtArgs>>): Prisma__sessionHoursClient<$Result.GetResult<Prisma.$sessionHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionHoursCountArgs} args - Arguments to filter SessionHours to count.
     * @example
     * // Count the number of SessionHours
     * const count = await prisma.sessionHours.count({
     *   where: {
     *     // ... the filter for the SessionHours we want to count
     *   }
     * })
    **/
    count<T extends sessionHoursCountArgs>(
      args?: Subset<T, sessionHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionHoursAggregateArgs>(args: Subset<T, SessionHoursAggregateArgs>): Prisma.PrismaPromise<GetSessionHoursAggregateType<T>>

    /**
     * Group by SessionHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionHoursGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sessionHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionHoursGroupByArgs['orderBy'] }
        : { orderBy?: sessionHoursGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sessionHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessionHours model
   */
  readonly fields: sessionHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessionHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends sessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sessionDefaultArgs<ExtArgs>>): Prisma__sessionClient<$Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sessionHours model
   */
  interface sessionHoursFieldRefs {
    readonly id: FieldRef<"sessionHours", 'Int'>
    readonly time: FieldRef<"sessionHours", 'String'>
    readonly bloodPressure: FieldRef<"sessionHours", 'String'>
    readonly rbs: FieldRef<"sessionHours", 'String'>
    readonly ivf: FieldRef<"sessionHours", 'String'>
    readonly drugs: FieldRef<"sessionHours", 'String'>
    readonly cramps: FieldRef<"sessionHours", 'String'>
    readonly vomitting: FieldRef<"sessionHours", 'String'>
    readonly hematoma: FieldRef<"sessionHours", 'String'>
    readonly chestPain: FieldRef<"sessionHours", 'String'>
    readonly pulseRate: FieldRef<"sessionHours", 'String'>
    readonly temperature: FieldRef<"sessionHours", 'String'>
    readonly sessionId: FieldRef<"sessionHours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sessionHours findUnique
   */
  export type sessionHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * Filter, which sessionHours to fetch.
     */
    where: sessionHoursWhereUniqueInput
  }

  /**
   * sessionHours findUniqueOrThrow
   */
  export type sessionHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * Filter, which sessionHours to fetch.
     */
    where: sessionHoursWhereUniqueInput
  }

  /**
   * sessionHours findFirst
   */
  export type sessionHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * Filter, which sessionHours to fetch.
     */
    where?: sessionHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessionHours to fetch.
     */
    orderBy?: sessionHoursOrderByWithRelationInput | sessionHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessionHours.
     */
    cursor?: sessionHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessionHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessionHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessionHours.
     */
    distinct?: SessionHoursScalarFieldEnum | SessionHoursScalarFieldEnum[]
  }

  /**
   * sessionHours findFirstOrThrow
   */
  export type sessionHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * Filter, which sessionHours to fetch.
     */
    where?: sessionHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessionHours to fetch.
     */
    orderBy?: sessionHoursOrderByWithRelationInput | sessionHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessionHours.
     */
    cursor?: sessionHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessionHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessionHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessionHours.
     */
    distinct?: SessionHoursScalarFieldEnum | SessionHoursScalarFieldEnum[]
  }

  /**
   * sessionHours findMany
   */
  export type sessionHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * Filter, which sessionHours to fetch.
     */
    where?: sessionHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessionHours to fetch.
     */
    orderBy?: sessionHoursOrderByWithRelationInput | sessionHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessionHours.
     */
    cursor?: sessionHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessionHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessionHours.
     */
    skip?: number
    distinct?: SessionHoursScalarFieldEnum | SessionHoursScalarFieldEnum[]
  }

  /**
   * sessionHours create
   */
  export type sessionHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * The data needed to create a sessionHours.
     */
    data: XOR<sessionHoursCreateInput, sessionHoursUncheckedCreateInput>
  }

  /**
   * sessionHours createMany
   */
  export type sessionHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessionHours.
     */
    data: sessionHoursCreateManyInput | sessionHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessionHours update
   */
  export type sessionHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * The data needed to update a sessionHours.
     */
    data: XOR<sessionHoursUpdateInput, sessionHoursUncheckedUpdateInput>
    /**
     * Choose, which sessionHours to update.
     */
    where: sessionHoursWhereUniqueInput
  }

  /**
   * sessionHours updateMany
   */
  export type sessionHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessionHours.
     */
    data: XOR<sessionHoursUpdateManyMutationInput, sessionHoursUncheckedUpdateManyInput>
    /**
     * Filter which sessionHours to update
     */
    where?: sessionHoursWhereInput
    /**
     * Limit how many sessionHours to update.
     */
    limit?: number
  }

  /**
   * sessionHours upsert
   */
  export type sessionHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * The filter to search for the sessionHours to update in case it exists.
     */
    where: sessionHoursWhereUniqueInput
    /**
     * In case the sessionHours found by the `where` argument doesn't exist, create a new sessionHours with this data.
     */
    create: XOR<sessionHoursCreateInput, sessionHoursUncheckedCreateInput>
    /**
     * In case the sessionHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionHoursUpdateInput, sessionHoursUncheckedUpdateInput>
  }

  /**
   * sessionHours delete
   */
  export type sessionHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
    /**
     * Filter which sessionHours to delete.
     */
    where: sessionHoursWhereUniqueInput
  }

  /**
   * sessionHours deleteMany
   */
  export type sessionHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessionHours to delete
     */
    where?: sessionHoursWhereInput
    /**
     * Limit how many sessionHours to delete.
     */
    limit?: number
  }

  /**
   * sessionHours without action
   */
  export type sessionHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessionHours
     */
    select?: sessionHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessionHours
     */
    omit?: sessionHoursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionHoursInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    usersecret: 'usersecret',
    authority: 'authority'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    patientName: 'patientName',
    residentialId: 'residentialId',
    age: 'age',
    birthDate: 'birthDate',
    phoneNumber: 'phoneNumber',
    address: 'address',
    bloodType: 'bloodType',
    hight: 'hight',
    weight: 'weight',
    social: 'social',
    gender: 'gender',
    sicknessCause: 'sicknessCause',
    firstEverTreatment: 'firstEverTreatment',
    firstTreatmentHere: 'firstTreatmentHere',
    note: 'note',
    filterNo: 'filterNo'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    originalName: 'originalName',
    storedName: 'storedName',
    size: 'size',
    mimeType: 'mimeType',
    path: 'path',
    uploadedAt: 'uploadedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    date: 'date',
    day: 'day',
    techName: 'techName',
    deviceNo: 'deviceNo',
    sessionType: 'sessionType',
    sessionDuration: 'sessionDuration',
    startingTime: 'startingTime',
    anticoagulantUsed: 'anticoagulantUsed',
    ktv: 'ktv',
    urr: 'urr',
    ultrafiltrationRate: 'ultrafiltrationRate',
    wtPreHD: 'wtPreHD',
    wtPostHD: 'wtPostHD',
    HDStarting: 'HDStarting',
    heparinRate: 'heparinRate',
    heparinBolus: 'heparinBolus',
    UFGoal: 'UFGoal',
    patientId: 'patientId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SessionHoursScalarFieldEnum: {
    id: 'id',
    time: 'time',
    bloodPressure: 'bloodPressure',
    rbs: 'rbs',
    ivf: 'ivf',
    drugs: 'drugs',
    cramps: 'cramps',
    vomitting: 'vomitting',
    hematoma: 'hematoma',
    chestPain: 'chestPain',
    pulseRate: 'pulseRate',
    temperature: 'temperature',
    sessionId: 'sessionId'
  };

  export type SessionHoursScalarFieldEnum = (typeof SessionHoursScalarFieldEnum)[keyof typeof SessionHoursScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const userOrderByRelevanceFieldEnum: {
    username: 'username',
    usersecret: 'usersecret',
    authority: 'authority'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const patientOrderByRelevanceFieldEnum: {
    patientName: 'patientName',
    residentialId: 'residentialId',
    age: 'age',
    birthDate: 'birthDate',
    phoneNumber: 'phoneNumber',
    address: 'address',
    bloodType: 'bloodType',
    hight: 'hight',
    weight: 'weight',
    social: 'social',
    gender: 'gender',
    sicknessCause: 'sicknessCause',
    firstEverTreatment: 'firstEverTreatment',
    firstTreatmentHere: 'firstTreatmentHere',
    note: 'note',
    filterNo: 'filterNo'
  };

  export type patientOrderByRelevanceFieldEnum = (typeof patientOrderByRelevanceFieldEnum)[keyof typeof patientOrderByRelevanceFieldEnum]


  export const fileOrderByRelevanceFieldEnum: {
    originalName: 'originalName',
    storedName: 'storedName',
    mimeType: 'mimeType',
    path: 'path'
  };

  export type fileOrderByRelevanceFieldEnum = (typeof fileOrderByRelevanceFieldEnum)[keyof typeof fileOrderByRelevanceFieldEnum]


  export const sessionOrderByRelevanceFieldEnum: {
    date: 'date',
    day: 'day',
    techName: 'techName',
    deviceNo: 'deviceNo',
    sessionType: 'sessionType',
    sessionDuration: 'sessionDuration',
    startingTime: 'startingTime',
    anticoagulantUsed: 'anticoagulantUsed',
    ktv: 'ktv',
    urr: 'urr',
    ultrafiltrationRate: 'ultrafiltrationRate',
    wtPreHD: 'wtPreHD',
    wtPostHD: 'wtPostHD',
    HDStarting: 'HDStarting',
    heparinRate: 'heparinRate',
    heparinBolus: 'heparinBolus',
    UFGoal: 'UFGoal'
  };

  export type sessionOrderByRelevanceFieldEnum = (typeof sessionOrderByRelevanceFieldEnum)[keyof typeof sessionOrderByRelevanceFieldEnum]


  export const sessionHoursOrderByRelevanceFieldEnum: {
    time: 'time',
    bloodPressure: 'bloodPressure',
    rbs: 'rbs',
    ivf: 'ivf',
    drugs: 'drugs',
    cramps: 'cramps',
    vomitting: 'vomitting',
    hematoma: 'hematoma',
    chestPain: 'chestPain',
    pulseRate: 'pulseRate',
    temperature: 'temperature'
  };

  export type sessionHoursOrderByRelevanceFieldEnum = (typeof sessionHoursOrderByRelevanceFieldEnum)[keyof typeof sessionHoursOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    usersecret?: StringFilter<"user"> | string
    authority?: StringNullableFilter<"user"> | string | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrderInput | SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    username?: StringFilter<"user"> | string
    usersecret?: StringFilter<"user"> | string
    authority?: StringNullableFilter<"user"> | string | null
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    usersecret?: StringWithAggregatesFilter<"user"> | string
    authority?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    id?: IntFilter<"patient"> | number
    patientName?: StringNullableFilter<"patient"> | string | null
    residentialId?: StringNullableFilter<"patient"> | string | null
    age?: StringNullableFilter<"patient"> | string | null
    birthDate?: StringNullableFilter<"patient"> | string | null
    phoneNumber?: StringNullableFilter<"patient"> | string | null
    address?: StringNullableFilter<"patient"> | string | null
    bloodType?: StringNullableFilter<"patient"> | string | null
    hight?: StringNullableFilter<"patient"> | string | null
    weight?: StringNullableFilter<"patient"> | string | null
    social?: StringNullableFilter<"patient"> | string | null
    gender?: StringNullableFilter<"patient"> | string | null
    sicknessCause?: StringNullableFilter<"patient"> | string | null
    firstEverTreatment?: StringNullableFilter<"patient"> | string | null
    firstTreatmentHere?: StringNullableFilter<"patient"> | string | null
    note?: StringNullableFilter<"patient"> | string | null
    filterNo?: StringNullableFilter<"patient"> | string | null
    files?: FileListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type patientOrderByWithRelationInput = {
    id?: SortOrder
    patientName?: SortOrderInput | SortOrder
    residentialId?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodType?: SortOrderInput | SortOrder
    hight?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    sicknessCause?: SortOrderInput | SortOrder
    firstEverTreatment?: SortOrderInput | SortOrder
    firstTreatmentHere?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    filterNo?: SortOrderInput | SortOrder
    files?: fileOrderByRelationAggregateInput
    sessions?: sessionOrderByRelationAggregateInput
    _relevance?: patientOrderByRelevanceInput
  }

  export type patientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    patientName?: StringNullableFilter<"patient"> | string | null
    residentialId?: StringNullableFilter<"patient"> | string | null
    age?: StringNullableFilter<"patient"> | string | null
    birthDate?: StringNullableFilter<"patient"> | string | null
    phoneNumber?: StringNullableFilter<"patient"> | string | null
    address?: StringNullableFilter<"patient"> | string | null
    bloodType?: StringNullableFilter<"patient"> | string | null
    hight?: StringNullableFilter<"patient"> | string | null
    weight?: StringNullableFilter<"patient"> | string | null
    social?: StringNullableFilter<"patient"> | string | null
    gender?: StringNullableFilter<"patient"> | string | null
    sicknessCause?: StringNullableFilter<"patient"> | string | null
    firstEverTreatment?: StringNullableFilter<"patient"> | string | null
    firstTreatmentHere?: StringNullableFilter<"patient"> | string | null
    note?: StringNullableFilter<"patient"> | string | null
    filterNo?: StringNullableFilter<"patient"> | string | null
    files?: FileListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "id">

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder
    patientName?: SortOrderInput | SortOrder
    residentialId?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bloodType?: SortOrderInput | SortOrder
    hight?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    sicknessCause?: SortOrderInput | SortOrder
    firstEverTreatment?: SortOrderInput | SortOrder
    firstTreatmentHere?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    filterNo?: SortOrderInput | SortOrder
    _count?: patientCountOrderByAggregateInput
    _avg?: patientAvgOrderByAggregateInput
    _max?: patientMaxOrderByAggregateInput
    _min?: patientMinOrderByAggregateInput
    _sum?: patientSumOrderByAggregateInput
  }

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    OR?: patientScalarWhereWithAggregatesInput[]
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"patient"> | number
    patientName?: StringNullableWithAggregatesFilter<"patient"> | string | null
    residentialId?: StringNullableWithAggregatesFilter<"patient"> | string | null
    age?: StringNullableWithAggregatesFilter<"patient"> | string | null
    birthDate?: StringNullableWithAggregatesFilter<"patient"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"patient"> | string | null
    bloodType?: StringNullableWithAggregatesFilter<"patient"> | string | null
    hight?: StringNullableWithAggregatesFilter<"patient"> | string | null
    weight?: StringNullableWithAggregatesFilter<"patient"> | string | null
    social?: StringNullableWithAggregatesFilter<"patient"> | string | null
    gender?: StringNullableWithAggregatesFilter<"patient"> | string | null
    sicknessCause?: StringNullableWithAggregatesFilter<"patient"> | string | null
    firstEverTreatment?: StringNullableWithAggregatesFilter<"patient"> | string | null
    firstTreatmentHere?: StringNullableWithAggregatesFilter<"patient"> | string | null
    note?: StringNullableWithAggregatesFilter<"patient"> | string | null
    filterNo?: StringNullableWithAggregatesFilter<"patient"> | string | null
  }

  export type fileWhereInput = {
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    id?: IntFilter<"file"> | number
    patientId?: IntFilter<"file"> | number
    originalName?: StringFilter<"file"> | string
    storedName?: StringFilter<"file"> | string
    size?: IntFilter<"file"> | number
    mimeType?: StringFilter<"file"> | string
    path?: StringFilter<"file"> | string
    uploadedAt?: DateTimeFilter<"file"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }

  export type fileOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    patient?: patientOrderByWithRelationInput
    _relevance?: fileOrderByRelevanceInput
  }

  export type fileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    patientId?: IntFilter<"file"> | number
    originalName?: StringFilter<"file"> | string
    storedName?: StringFilter<"file"> | string
    size?: IntFilter<"file"> | number
    mimeType?: StringFilter<"file"> | string
    path?: StringFilter<"file"> | string
    uploadedAt?: DateTimeFilter<"file"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }, "id" | "id">

  export type fileOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    _count?: fileCountOrderByAggregateInput
    _avg?: fileAvgOrderByAggregateInput
    _max?: fileMaxOrderByAggregateInput
    _min?: fileMinOrderByAggregateInput
    _sum?: fileSumOrderByAggregateInput
  }

  export type fileScalarWhereWithAggregatesInput = {
    AND?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    OR?: fileScalarWhereWithAggregatesInput[]
    NOT?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"file"> | number
    patientId?: IntWithAggregatesFilter<"file"> | number
    originalName?: StringWithAggregatesFilter<"file"> | string
    storedName?: StringWithAggregatesFilter<"file"> | string
    size?: IntWithAggregatesFilter<"file"> | number
    mimeType?: StringWithAggregatesFilter<"file"> | string
    path?: StringWithAggregatesFilter<"file"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"file"> | Date | string
  }

  export type sessionWhereInput = {
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    id?: IntFilter<"session"> | number
    date?: StringNullableFilter<"session"> | string | null
    day?: StringNullableFilter<"session"> | string | null
    techName?: StringNullableFilter<"session"> | string | null
    deviceNo?: StringNullableFilter<"session"> | string | null
    sessionType?: StringNullableFilter<"session"> | string | null
    sessionDuration?: StringNullableFilter<"session"> | string | null
    startingTime?: StringNullableFilter<"session"> | string | null
    anticoagulantUsed?: StringNullableFilter<"session"> | string | null
    ktv?: StringNullableFilter<"session"> | string | null
    urr?: StringNullableFilter<"session"> | string | null
    ultrafiltrationRate?: StringNullableFilter<"session"> | string | null
    wtPreHD?: StringNullableFilter<"session"> | string | null
    wtPostHD?: StringNullableFilter<"session"> | string | null
    HDStarting?: StringNullableFilter<"session"> | string | null
    heparinRate?: StringNullableFilter<"session"> | string | null
    heparinBolus?: StringNullableFilter<"session"> | string | null
    UFGoal?: StringNullableFilter<"session"> | string | null
    patientId?: IntFilter<"session"> | number
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
    hours?: SessionHoursListRelationFilter
  }

  export type sessionOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    day?: SortOrderInput | SortOrder
    techName?: SortOrderInput | SortOrder
    deviceNo?: SortOrderInput | SortOrder
    sessionType?: SortOrderInput | SortOrder
    sessionDuration?: SortOrderInput | SortOrder
    startingTime?: SortOrderInput | SortOrder
    anticoagulantUsed?: SortOrderInput | SortOrder
    ktv?: SortOrderInput | SortOrder
    urr?: SortOrderInput | SortOrder
    ultrafiltrationRate?: SortOrderInput | SortOrder
    wtPreHD?: SortOrderInput | SortOrder
    wtPostHD?: SortOrderInput | SortOrder
    HDStarting?: SortOrderInput | SortOrder
    heparinRate?: SortOrderInput | SortOrder
    heparinBolus?: SortOrderInput | SortOrder
    UFGoal?: SortOrderInput | SortOrder
    patientId?: SortOrder
    patient?: patientOrderByWithRelationInput
    hours?: sessionHoursOrderByRelationAggregateInput
    _relevance?: sessionOrderByRelevanceInput
  }

  export type sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sessionWhereInput | sessionWhereInput[]
    OR?: sessionWhereInput[]
    NOT?: sessionWhereInput | sessionWhereInput[]
    date?: StringNullableFilter<"session"> | string | null
    day?: StringNullableFilter<"session"> | string | null
    techName?: StringNullableFilter<"session"> | string | null
    deviceNo?: StringNullableFilter<"session"> | string | null
    sessionType?: StringNullableFilter<"session"> | string | null
    sessionDuration?: StringNullableFilter<"session"> | string | null
    startingTime?: StringNullableFilter<"session"> | string | null
    anticoagulantUsed?: StringNullableFilter<"session"> | string | null
    ktv?: StringNullableFilter<"session"> | string | null
    urr?: StringNullableFilter<"session"> | string | null
    ultrafiltrationRate?: StringNullableFilter<"session"> | string | null
    wtPreHD?: StringNullableFilter<"session"> | string | null
    wtPostHD?: StringNullableFilter<"session"> | string | null
    HDStarting?: StringNullableFilter<"session"> | string | null
    heparinRate?: StringNullableFilter<"session"> | string | null
    heparinBolus?: StringNullableFilter<"session"> | string | null
    UFGoal?: StringNullableFilter<"session"> | string | null
    patientId?: IntFilter<"session"> | number
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
    hours?: SessionHoursListRelationFilter
  }, "id" | "id">

  export type sessionOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrderInput | SortOrder
    day?: SortOrderInput | SortOrder
    techName?: SortOrderInput | SortOrder
    deviceNo?: SortOrderInput | SortOrder
    sessionType?: SortOrderInput | SortOrder
    sessionDuration?: SortOrderInput | SortOrder
    startingTime?: SortOrderInput | SortOrder
    anticoagulantUsed?: SortOrderInput | SortOrder
    ktv?: SortOrderInput | SortOrder
    urr?: SortOrderInput | SortOrder
    ultrafiltrationRate?: SortOrderInput | SortOrder
    wtPreHD?: SortOrderInput | SortOrder
    wtPostHD?: SortOrderInput | SortOrder
    HDStarting?: SortOrderInput | SortOrder
    heparinRate?: SortOrderInput | SortOrder
    heparinBolus?: SortOrderInput | SortOrder
    UFGoal?: SortOrderInput | SortOrder
    patientId?: SortOrder
    _count?: sessionCountOrderByAggregateInput
    _avg?: sessionAvgOrderByAggregateInput
    _max?: sessionMaxOrderByAggregateInput
    _min?: sessionMinOrderByAggregateInput
    _sum?: sessionSumOrderByAggregateInput
  }

  export type sessionScalarWhereWithAggregatesInput = {
    AND?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    OR?: sessionScalarWhereWithAggregatesInput[]
    NOT?: sessionScalarWhereWithAggregatesInput | sessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"session"> | number
    date?: StringNullableWithAggregatesFilter<"session"> | string | null
    day?: StringNullableWithAggregatesFilter<"session"> | string | null
    techName?: StringNullableWithAggregatesFilter<"session"> | string | null
    deviceNo?: StringNullableWithAggregatesFilter<"session"> | string | null
    sessionType?: StringNullableWithAggregatesFilter<"session"> | string | null
    sessionDuration?: StringNullableWithAggregatesFilter<"session"> | string | null
    startingTime?: StringNullableWithAggregatesFilter<"session"> | string | null
    anticoagulantUsed?: StringNullableWithAggregatesFilter<"session"> | string | null
    ktv?: StringNullableWithAggregatesFilter<"session"> | string | null
    urr?: StringNullableWithAggregatesFilter<"session"> | string | null
    ultrafiltrationRate?: StringNullableWithAggregatesFilter<"session"> | string | null
    wtPreHD?: StringNullableWithAggregatesFilter<"session"> | string | null
    wtPostHD?: StringNullableWithAggregatesFilter<"session"> | string | null
    HDStarting?: StringNullableWithAggregatesFilter<"session"> | string | null
    heparinRate?: StringNullableWithAggregatesFilter<"session"> | string | null
    heparinBolus?: StringNullableWithAggregatesFilter<"session"> | string | null
    UFGoal?: StringNullableWithAggregatesFilter<"session"> | string | null
    patientId?: IntWithAggregatesFilter<"session"> | number
  }

  export type sessionHoursWhereInput = {
    AND?: sessionHoursWhereInput | sessionHoursWhereInput[]
    OR?: sessionHoursWhereInput[]
    NOT?: sessionHoursWhereInput | sessionHoursWhereInput[]
    id?: IntFilter<"sessionHours"> | number
    time?: StringNullableFilter<"sessionHours"> | string | null
    bloodPressure?: StringNullableFilter<"sessionHours"> | string | null
    rbs?: StringNullableFilter<"sessionHours"> | string | null
    ivf?: StringNullableFilter<"sessionHours"> | string | null
    drugs?: StringNullableFilter<"sessionHours"> | string | null
    cramps?: StringNullableFilter<"sessionHours"> | string | null
    vomitting?: StringNullableFilter<"sessionHours"> | string | null
    hematoma?: StringNullableFilter<"sessionHours"> | string | null
    chestPain?: StringNullableFilter<"sessionHours"> | string | null
    pulseRate?: StringNullableFilter<"sessionHours"> | string | null
    temperature?: StringNullableFilter<"sessionHours"> | string | null
    sessionId?: IntFilter<"sessionHours"> | number
    session?: XOR<SessionScalarRelationFilter, sessionWhereInput>
  }

  export type sessionHoursOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    rbs?: SortOrderInput | SortOrder
    ivf?: SortOrderInput | SortOrder
    drugs?: SortOrderInput | SortOrder
    cramps?: SortOrderInput | SortOrder
    vomitting?: SortOrderInput | SortOrder
    hematoma?: SortOrderInput | SortOrder
    chestPain?: SortOrderInput | SortOrder
    pulseRate?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    session?: sessionOrderByWithRelationInput
    _relevance?: sessionHoursOrderByRelevanceInput
  }

  export type sessionHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sessionHoursWhereInput | sessionHoursWhereInput[]
    OR?: sessionHoursWhereInput[]
    NOT?: sessionHoursWhereInput | sessionHoursWhereInput[]
    time?: StringNullableFilter<"sessionHours"> | string | null
    bloodPressure?: StringNullableFilter<"sessionHours"> | string | null
    rbs?: StringNullableFilter<"sessionHours"> | string | null
    ivf?: StringNullableFilter<"sessionHours"> | string | null
    drugs?: StringNullableFilter<"sessionHours"> | string | null
    cramps?: StringNullableFilter<"sessionHours"> | string | null
    vomitting?: StringNullableFilter<"sessionHours"> | string | null
    hematoma?: StringNullableFilter<"sessionHours"> | string | null
    chestPain?: StringNullableFilter<"sessionHours"> | string | null
    pulseRate?: StringNullableFilter<"sessionHours"> | string | null
    temperature?: StringNullableFilter<"sessionHours"> | string | null
    sessionId?: IntFilter<"sessionHours"> | number
    session?: XOR<SessionScalarRelationFilter, sessionWhereInput>
  }, "id" | "id">

  export type sessionHoursOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrderInput | SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    rbs?: SortOrderInput | SortOrder
    ivf?: SortOrderInput | SortOrder
    drugs?: SortOrderInput | SortOrder
    cramps?: SortOrderInput | SortOrder
    vomitting?: SortOrderInput | SortOrder
    hematoma?: SortOrderInput | SortOrder
    chestPain?: SortOrderInput | SortOrder
    pulseRate?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    sessionId?: SortOrder
    _count?: sessionHoursCountOrderByAggregateInput
    _avg?: sessionHoursAvgOrderByAggregateInput
    _max?: sessionHoursMaxOrderByAggregateInput
    _min?: sessionHoursMinOrderByAggregateInput
    _sum?: sessionHoursSumOrderByAggregateInput
  }

  export type sessionHoursScalarWhereWithAggregatesInput = {
    AND?: sessionHoursScalarWhereWithAggregatesInput | sessionHoursScalarWhereWithAggregatesInput[]
    OR?: sessionHoursScalarWhereWithAggregatesInput[]
    NOT?: sessionHoursScalarWhereWithAggregatesInput | sessionHoursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sessionHours"> | number
    time?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    bloodPressure?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    rbs?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    ivf?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    drugs?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    cramps?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    vomitting?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    hematoma?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    chestPain?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    pulseRate?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    temperature?: StringNullableWithAggregatesFilter<"sessionHours"> | string | null
    sessionId?: IntWithAggregatesFilter<"sessionHours"> | number
  }

  export type userCreateInput = {
    username: string
    usersecret: string
    authority?: string | null
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    usersecret: string
    authority?: string | null
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    usersecret?: StringFieldUpdateOperationsInput | string
    authority?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patientCreateInput = {
    patientName?: string | null
    residentialId?: string | null
    age?: string | null
    birthDate?: string | null
    phoneNumber?: string | null
    address?: string | null
    bloodType?: string | null
    hight?: string | null
    weight?: string | null
    social?: string | null
    gender?: string | null
    sicknessCause?: string | null
    firstEverTreatment?: string | null
    firstTreatmentHere?: string | null
    note?: string | null
    filterNo?: string | null
    files?: fileCreateNestedManyWithoutPatientInput
    sessions?: sessionCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateInput = {
    id?: number
    patientName?: string | null
    residentialId?: string | null
    age?: string | null
    birthDate?: string | null
    phoneNumber?: string | null
    address?: string | null
    bloodType?: string | null
    hight?: string | null
    weight?: string | null
    social?: string | null
    gender?: string | null
    sicknessCause?: string | null
    firstEverTreatment?: string | null
    firstTreatmentHere?: string | null
    note?: string | null
    filterNo?: string | null
    files?: fileUncheckedCreateNestedManyWithoutPatientInput
    sessions?: sessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientUpdateInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
    files?: fileUpdateManyWithoutPatientNestedInput
    sessions?: sessionUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
    files?: fileUncheckedUpdateManyWithoutPatientNestedInput
    sessions?: sessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateManyInput = {
    id?: number
    patientName?: string | null
    residentialId?: string | null
    age?: string | null
    birthDate?: string | null
    phoneNumber?: string | null
    address?: string | null
    bloodType?: string | null
    hight?: string | null
    weight?: string | null
    social?: string | null
    gender?: string | null
    sicknessCause?: string | null
    firstEverTreatment?: string | null
    firstTreatmentHere?: string | null
    note?: string | null
    filterNo?: string | null
  }

  export type patientUpdateManyMutationInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fileCreateInput = {
    originalName: string
    storedName: string
    size: number
    mimeType: string
    path: string
    uploadedAt?: Date | string
    patient: patientCreateNestedOneWithoutFilesInput
  }

  export type fileUncheckedCreateInput = {
    id?: number
    patientId: number
    originalName: string
    storedName: string
    size: number
    mimeType: string
    path: string
    uploadedAt?: Date | string
  }

  export type fileUpdateInput = {
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientUpdateOneRequiredWithoutFilesNestedInput
  }

  export type fileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileCreateManyInput = {
    id?: number
    patientId: number
    originalName: string
    storedName: string
    size: number
    mimeType: string
    path: string
    uploadedAt?: Date | string
  }

  export type fileUpdateManyMutationInput = {
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionCreateInput = {
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
    patient: patientCreateNestedOneWithoutSessionsInput
    hours?: sessionHoursCreateNestedManyWithoutSessionInput
  }

  export type sessionUncheckedCreateInput = {
    id?: number
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
    patientId: number
    hours?: sessionHoursUncheckedCreateNestedManyWithoutSessionInput
  }

  export type sessionUpdateInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: patientUpdateOneRequiredWithoutSessionsNestedInput
    hours?: sessionHoursUpdateManyWithoutSessionNestedInput
  }

  export type sessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
    patientId?: IntFieldUpdateOperationsInput | number
    hours?: sessionHoursUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type sessionCreateManyInput = {
    id?: number
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
    patientId: number
  }

  export type sessionUpdateManyMutationInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type sessionHoursCreateInput = {
    time?: string | null
    bloodPressure?: string | null
    rbs?: string | null
    ivf?: string | null
    drugs?: string | null
    cramps?: string | null
    vomitting?: string | null
    hematoma?: string | null
    chestPain?: string | null
    pulseRate?: string | null
    temperature?: string | null
    session: sessionCreateNestedOneWithoutHoursInput
  }

  export type sessionHoursUncheckedCreateInput = {
    id?: number
    time?: string | null
    bloodPressure?: string | null
    rbs?: string | null
    ivf?: string | null
    drugs?: string | null
    cramps?: string | null
    vomitting?: string | null
    hematoma?: string | null
    chestPain?: string | null
    pulseRate?: string | null
    temperature?: string | null
    sessionId: number
  }

  export type sessionHoursUpdateInput = {
    time?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    ivf?: NullableStringFieldUpdateOperationsInput | string | null
    drugs?: NullableStringFieldUpdateOperationsInput | string | null
    cramps?: NullableStringFieldUpdateOperationsInput | string | null
    vomitting?: NullableStringFieldUpdateOperationsInput | string | null
    hematoma?: NullableStringFieldUpdateOperationsInput | string | null
    chestPain?: NullableStringFieldUpdateOperationsInput | string | null
    pulseRate?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    session?: sessionUpdateOneRequiredWithoutHoursNestedInput
  }

  export type sessionHoursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    ivf?: NullableStringFieldUpdateOperationsInput | string | null
    drugs?: NullableStringFieldUpdateOperationsInput | string | null
    cramps?: NullableStringFieldUpdateOperationsInput | string | null
    vomitting?: NullableStringFieldUpdateOperationsInput | string | null
    hematoma?: NullableStringFieldUpdateOperationsInput | string | null
    chestPain?: NullableStringFieldUpdateOperationsInput | string | null
    pulseRate?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type sessionHoursCreateManyInput = {
    id?: number
    time?: string | null
    bloodPressure?: string | null
    rbs?: string | null
    ivf?: string | null
    drugs?: string | null
    cramps?: string | null
    vomitting?: string | null
    hematoma?: string | null
    chestPain?: string | null
    pulseRate?: string | null
    temperature?: string | null
    sessionId: number
  }

  export type sessionHoursUpdateManyMutationInput = {
    time?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    ivf?: NullableStringFieldUpdateOperationsInput | string | null
    drugs?: NullableStringFieldUpdateOperationsInput | string | null
    cramps?: NullableStringFieldUpdateOperationsInput | string | null
    vomitting?: NullableStringFieldUpdateOperationsInput | string | null
    hematoma?: NullableStringFieldUpdateOperationsInput | string | null
    chestPain?: NullableStringFieldUpdateOperationsInput | string | null
    pulseRate?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionHoursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    ivf?: NullableStringFieldUpdateOperationsInput | string | null
    drugs?: NullableStringFieldUpdateOperationsInput | string | null
    cramps?: NullableStringFieldUpdateOperationsInput | string | null
    vomitting?: NullableStringFieldUpdateOperationsInput | string | null
    hematoma?: NullableStringFieldUpdateOperationsInput | string | null
    chestPain?: NullableStringFieldUpdateOperationsInput | string | null
    pulseRate?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    usersecret?: SortOrder
    authority?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FileListRelationFilter = {
    every?: fileWhereInput
    some?: fileWhereInput
    none?: fileWhereInput
  }

  export type SessionListRelationFilter = {
    every?: sessionWhereInput
    some?: sessionWhereInput
    none?: sessionWhereInput
  }

  export type fileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patientOrderByRelevanceInput = {
    fields: patientOrderByRelevanceFieldEnum | patientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    residentialId?: SortOrder
    age?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    bloodType?: SortOrder
    hight?: SortOrder
    weight?: SortOrder
    social?: SortOrder
    gender?: SortOrder
    sicknessCause?: SortOrder
    firstEverTreatment?: SortOrder
    firstTreatmentHere?: SortOrder
    note?: SortOrder
    filterNo?: SortOrder
  }

  export type patientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    residentialId?: SortOrder
    age?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    bloodType?: SortOrder
    hight?: SortOrder
    weight?: SortOrder
    social?: SortOrder
    gender?: SortOrder
    sicknessCause?: SortOrder
    firstEverTreatment?: SortOrder
    firstTreatmentHere?: SortOrder
    note?: SortOrder
    filterNo?: SortOrder
  }

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    residentialId?: SortOrder
    age?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    bloodType?: SortOrder
    hight?: SortOrder
    weight?: SortOrder
    social?: SortOrder
    gender?: SortOrder
    sicknessCause?: SortOrder
    firstEverTreatment?: SortOrder
    firstTreatmentHere?: SortOrder
    note?: SortOrder
    filterNo?: SortOrder
  }

  export type patientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PatientScalarRelationFilter = {
    is?: patientWhereInput
    isNot?: patientWhereInput
  }

  export type fileOrderByRelevanceInput = {
    fields: fileOrderByRelevanceFieldEnum | fileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type fileCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
  }

  export type fileAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    size?: SortOrder
  }

  export type fileMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
  }

  export type fileMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    originalName?: SortOrder
    storedName?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
  }

  export type fileSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    size?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SessionHoursListRelationFilter = {
    every?: sessionHoursWhereInput
    some?: sessionHoursWhereInput
    none?: sessionHoursWhereInput
  }

  export type sessionHoursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionOrderByRelevanceInput = {
    fields: sessionOrderByRelevanceFieldEnum | sessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    techName?: SortOrder
    deviceNo?: SortOrder
    sessionType?: SortOrder
    sessionDuration?: SortOrder
    startingTime?: SortOrder
    anticoagulantUsed?: SortOrder
    ktv?: SortOrder
    urr?: SortOrder
    ultrafiltrationRate?: SortOrder
    wtPreHD?: SortOrder
    wtPostHD?: SortOrder
    HDStarting?: SortOrder
    heparinRate?: SortOrder
    heparinBolus?: SortOrder
    UFGoal?: SortOrder
    patientId?: SortOrder
  }

  export type sessionAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type sessionMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    techName?: SortOrder
    deviceNo?: SortOrder
    sessionType?: SortOrder
    sessionDuration?: SortOrder
    startingTime?: SortOrder
    anticoagulantUsed?: SortOrder
    ktv?: SortOrder
    urr?: SortOrder
    ultrafiltrationRate?: SortOrder
    wtPreHD?: SortOrder
    wtPostHD?: SortOrder
    HDStarting?: SortOrder
    heparinRate?: SortOrder
    heparinBolus?: SortOrder
    UFGoal?: SortOrder
    patientId?: SortOrder
  }

  export type sessionMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    day?: SortOrder
    techName?: SortOrder
    deviceNo?: SortOrder
    sessionType?: SortOrder
    sessionDuration?: SortOrder
    startingTime?: SortOrder
    anticoagulantUsed?: SortOrder
    ktv?: SortOrder
    urr?: SortOrder
    ultrafiltrationRate?: SortOrder
    wtPreHD?: SortOrder
    wtPostHD?: SortOrder
    HDStarting?: SortOrder
    heparinRate?: SortOrder
    heparinBolus?: SortOrder
    UFGoal?: SortOrder
    patientId?: SortOrder
  }

  export type sessionSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type SessionScalarRelationFilter = {
    is?: sessionWhereInput
    isNot?: sessionWhereInput
  }

  export type sessionHoursOrderByRelevanceInput = {
    fields: sessionHoursOrderByRelevanceFieldEnum | sessionHoursOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sessionHoursCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    bloodPressure?: SortOrder
    rbs?: SortOrder
    ivf?: SortOrder
    drugs?: SortOrder
    cramps?: SortOrder
    vomitting?: SortOrder
    hematoma?: SortOrder
    chestPain?: SortOrder
    pulseRate?: SortOrder
    temperature?: SortOrder
    sessionId?: SortOrder
  }

  export type sessionHoursAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type sessionHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    bloodPressure?: SortOrder
    rbs?: SortOrder
    ivf?: SortOrder
    drugs?: SortOrder
    cramps?: SortOrder
    vomitting?: SortOrder
    hematoma?: SortOrder
    chestPain?: SortOrder
    pulseRate?: SortOrder
    temperature?: SortOrder
    sessionId?: SortOrder
  }

  export type sessionHoursMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    bloodPressure?: SortOrder
    rbs?: SortOrder
    ivf?: SortOrder
    drugs?: SortOrder
    cramps?: SortOrder
    vomitting?: SortOrder
    hematoma?: SortOrder
    chestPain?: SortOrder
    pulseRate?: SortOrder
    temperature?: SortOrder
    sessionId?: SortOrder
  }

  export type sessionHoursSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type fileCreateNestedManyWithoutPatientInput = {
    create?: XOR<fileCreateWithoutPatientInput, fileUncheckedCreateWithoutPatientInput> | fileCreateWithoutPatientInput[] | fileUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: fileCreateOrConnectWithoutPatientInput | fileCreateOrConnectWithoutPatientInput[]
    createMany?: fileCreateManyPatientInputEnvelope
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
  }

  export type sessionCreateNestedManyWithoutPatientInput = {
    create?: XOR<sessionCreateWithoutPatientInput, sessionUncheckedCreateWithoutPatientInput> | sessionCreateWithoutPatientInput[] | sessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutPatientInput | sessionCreateOrConnectWithoutPatientInput[]
    createMany?: sessionCreateManyPatientInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type fileUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<fileCreateWithoutPatientInput, fileUncheckedCreateWithoutPatientInput> | fileCreateWithoutPatientInput[] | fileUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: fileCreateOrConnectWithoutPatientInput | fileCreateOrConnectWithoutPatientInput[]
    createMany?: fileCreateManyPatientInputEnvelope
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
  }

  export type sessionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<sessionCreateWithoutPatientInput, sessionUncheckedCreateWithoutPatientInput> | sessionCreateWithoutPatientInput[] | sessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutPatientInput | sessionCreateOrConnectWithoutPatientInput[]
    createMany?: sessionCreateManyPatientInputEnvelope
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
  }

  export type fileUpdateManyWithoutPatientNestedInput = {
    create?: XOR<fileCreateWithoutPatientInput, fileUncheckedCreateWithoutPatientInput> | fileCreateWithoutPatientInput[] | fileUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: fileCreateOrConnectWithoutPatientInput | fileCreateOrConnectWithoutPatientInput[]
    upsert?: fileUpsertWithWhereUniqueWithoutPatientInput | fileUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: fileCreateManyPatientInputEnvelope
    set?: fileWhereUniqueInput | fileWhereUniqueInput[]
    disconnect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    delete?: fileWhereUniqueInput | fileWhereUniqueInput[]
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    update?: fileUpdateWithWhereUniqueWithoutPatientInput | fileUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: fileUpdateManyWithWhereWithoutPatientInput | fileUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: fileScalarWhereInput | fileScalarWhereInput[]
  }

  export type sessionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<sessionCreateWithoutPatientInput, sessionUncheckedCreateWithoutPatientInput> | sessionCreateWithoutPatientInput[] | sessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutPatientInput | sessionCreateOrConnectWithoutPatientInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutPatientInput | sessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: sessionCreateManyPatientInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutPatientInput | sessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutPatientInput | sessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type fileUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<fileCreateWithoutPatientInput, fileUncheckedCreateWithoutPatientInput> | fileCreateWithoutPatientInput[] | fileUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: fileCreateOrConnectWithoutPatientInput | fileCreateOrConnectWithoutPatientInput[]
    upsert?: fileUpsertWithWhereUniqueWithoutPatientInput | fileUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: fileCreateManyPatientInputEnvelope
    set?: fileWhereUniqueInput | fileWhereUniqueInput[]
    disconnect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    delete?: fileWhereUniqueInput | fileWhereUniqueInput[]
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    update?: fileUpdateWithWhereUniqueWithoutPatientInput | fileUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: fileUpdateManyWithWhereWithoutPatientInput | fileUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: fileScalarWhereInput | fileScalarWhereInput[]
  }

  export type sessionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<sessionCreateWithoutPatientInput, sessionUncheckedCreateWithoutPatientInput> | sessionCreateWithoutPatientInput[] | sessionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: sessionCreateOrConnectWithoutPatientInput | sessionCreateOrConnectWithoutPatientInput[]
    upsert?: sessionUpsertWithWhereUniqueWithoutPatientInput | sessionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: sessionCreateManyPatientInputEnvelope
    set?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    disconnect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    delete?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    connect?: sessionWhereUniqueInput | sessionWhereUniqueInput[]
    update?: sessionUpdateWithWhereUniqueWithoutPatientInput | sessionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: sessionUpdateManyWithWhereWithoutPatientInput | sessionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: sessionScalarWhereInput | sessionScalarWhereInput[]
  }

  export type patientCreateNestedOneWithoutFilesInput = {
    create?: XOR<patientCreateWithoutFilesInput, patientUncheckedCreateWithoutFilesInput>
    connectOrCreate?: patientCreateOrConnectWithoutFilesInput
    connect?: patientWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type patientUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<patientCreateWithoutFilesInput, patientUncheckedCreateWithoutFilesInput>
    connectOrCreate?: patientCreateOrConnectWithoutFilesInput
    upsert?: patientUpsertWithoutFilesInput
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutFilesInput, patientUpdateWithoutFilesInput>, patientUncheckedUpdateWithoutFilesInput>
  }

  export type patientCreateNestedOneWithoutSessionsInput = {
    create?: XOR<patientCreateWithoutSessionsInput, patientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: patientCreateOrConnectWithoutSessionsInput
    connect?: patientWhereUniqueInput
  }

  export type sessionHoursCreateNestedManyWithoutSessionInput = {
    create?: XOR<sessionHoursCreateWithoutSessionInput, sessionHoursUncheckedCreateWithoutSessionInput> | sessionHoursCreateWithoutSessionInput[] | sessionHoursUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: sessionHoursCreateOrConnectWithoutSessionInput | sessionHoursCreateOrConnectWithoutSessionInput[]
    createMany?: sessionHoursCreateManySessionInputEnvelope
    connect?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
  }

  export type sessionHoursUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<sessionHoursCreateWithoutSessionInput, sessionHoursUncheckedCreateWithoutSessionInput> | sessionHoursCreateWithoutSessionInput[] | sessionHoursUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: sessionHoursCreateOrConnectWithoutSessionInput | sessionHoursCreateOrConnectWithoutSessionInput[]
    createMany?: sessionHoursCreateManySessionInputEnvelope
    connect?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
  }

  export type patientUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<patientCreateWithoutSessionsInput, patientUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: patientCreateOrConnectWithoutSessionsInput
    upsert?: patientUpsertWithoutSessionsInput
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutSessionsInput, patientUpdateWithoutSessionsInput>, patientUncheckedUpdateWithoutSessionsInput>
  }

  export type sessionHoursUpdateManyWithoutSessionNestedInput = {
    create?: XOR<sessionHoursCreateWithoutSessionInput, sessionHoursUncheckedCreateWithoutSessionInput> | sessionHoursCreateWithoutSessionInput[] | sessionHoursUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: sessionHoursCreateOrConnectWithoutSessionInput | sessionHoursCreateOrConnectWithoutSessionInput[]
    upsert?: sessionHoursUpsertWithWhereUniqueWithoutSessionInput | sessionHoursUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: sessionHoursCreateManySessionInputEnvelope
    set?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    disconnect?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    delete?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    connect?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    update?: sessionHoursUpdateWithWhereUniqueWithoutSessionInput | sessionHoursUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: sessionHoursUpdateManyWithWhereWithoutSessionInput | sessionHoursUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: sessionHoursScalarWhereInput | sessionHoursScalarWhereInput[]
  }

  export type sessionHoursUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<sessionHoursCreateWithoutSessionInput, sessionHoursUncheckedCreateWithoutSessionInput> | sessionHoursCreateWithoutSessionInput[] | sessionHoursUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: sessionHoursCreateOrConnectWithoutSessionInput | sessionHoursCreateOrConnectWithoutSessionInput[]
    upsert?: sessionHoursUpsertWithWhereUniqueWithoutSessionInput | sessionHoursUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: sessionHoursCreateManySessionInputEnvelope
    set?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    disconnect?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    delete?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    connect?: sessionHoursWhereUniqueInput | sessionHoursWhereUniqueInput[]
    update?: sessionHoursUpdateWithWhereUniqueWithoutSessionInput | sessionHoursUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: sessionHoursUpdateManyWithWhereWithoutSessionInput | sessionHoursUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: sessionHoursScalarWhereInput | sessionHoursScalarWhereInput[]
  }

  export type sessionCreateNestedOneWithoutHoursInput = {
    create?: XOR<sessionCreateWithoutHoursInput, sessionUncheckedCreateWithoutHoursInput>
    connectOrCreate?: sessionCreateOrConnectWithoutHoursInput
    connect?: sessionWhereUniqueInput
  }

  export type sessionUpdateOneRequiredWithoutHoursNestedInput = {
    create?: XOR<sessionCreateWithoutHoursInput, sessionUncheckedCreateWithoutHoursInput>
    connectOrCreate?: sessionCreateOrConnectWithoutHoursInput
    upsert?: sessionUpsertWithoutHoursInput
    connect?: sessionWhereUniqueInput
    update?: XOR<XOR<sessionUpdateToOneWithWhereWithoutHoursInput, sessionUpdateWithoutHoursInput>, sessionUncheckedUpdateWithoutHoursInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type fileCreateWithoutPatientInput = {
    originalName: string
    storedName: string
    size: number
    mimeType: string
    path: string
    uploadedAt?: Date | string
  }

  export type fileUncheckedCreateWithoutPatientInput = {
    id?: number
    originalName: string
    storedName: string
    size: number
    mimeType: string
    path: string
    uploadedAt?: Date | string
  }

  export type fileCreateOrConnectWithoutPatientInput = {
    where: fileWhereUniqueInput
    create: XOR<fileCreateWithoutPatientInput, fileUncheckedCreateWithoutPatientInput>
  }

  export type fileCreateManyPatientInputEnvelope = {
    data: fileCreateManyPatientInput | fileCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type sessionCreateWithoutPatientInput = {
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
    hours?: sessionHoursCreateNestedManyWithoutSessionInput
  }

  export type sessionUncheckedCreateWithoutPatientInput = {
    id?: number
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
    hours?: sessionHoursUncheckedCreateNestedManyWithoutSessionInput
  }

  export type sessionCreateOrConnectWithoutPatientInput = {
    where: sessionWhereUniqueInput
    create: XOR<sessionCreateWithoutPatientInput, sessionUncheckedCreateWithoutPatientInput>
  }

  export type sessionCreateManyPatientInputEnvelope = {
    data: sessionCreateManyPatientInput | sessionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type fileUpsertWithWhereUniqueWithoutPatientInput = {
    where: fileWhereUniqueInput
    update: XOR<fileUpdateWithoutPatientInput, fileUncheckedUpdateWithoutPatientInput>
    create: XOR<fileCreateWithoutPatientInput, fileUncheckedCreateWithoutPatientInput>
  }

  export type fileUpdateWithWhereUniqueWithoutPatientInput = {
    where: fileWhereUniqueInput
    data: XOR<fileUpdateWithoutPatientInput, fileUncheckedUpdateWithoutPatientInput>
  }

  export type fileUpdateManyWithWhereWithoutPatientInput = {
    where: fileScalarWhereInput
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyWithoutPatientInput>
  }

  export type fileScalarWhereInput = {
    AND?: fileScalarWhereInput | fileScalarWhereInput[]
    OR?: fileScalarWhereInput[]
    NOT?: fileScalarWhereInput | fileScalarWhereInput[]
    id?: IntFilter<"file"> | number
    patientId?: IntFilter<"file"> | number
    originalName?: StringFilter<"file"> | string
    storedName?: StringFilter<"file"> | string
    size?: IntFilter<"file"> | number
    mimeType?: StringFilter<"file"> | string
    path?: StringFilter<"file"> | string
    uploadedAt?: DateTimeFilter<"file"> | Date | string
  }

  export type sessionUpsertWithWhereUniqueWithoutPatientInput = {
    where: sessionWhereUniqueInput
    update: XOR<sessionUpdateWithoutPatientInput, sessionUncheckedUpdateWithoutPatientInput>
    create: XOR<sessionCreateWithoutPatientInput, sessionUncheckedCreateWithoutPatientInput>
  }

  export type sessionUpdateWithWhereUniqueWithoutPatientInput = {
    where: sessionWhereUniqueInput
    data: XOR<sessionUpdateWithoutPatientInput, sessionUncheckedUpdateWithoutPatientInput>
  }

  export type sessionUpdateManyWithWhereWithoutPatientInput = {
    where: sessionScalarWhereInput
    data: XOR<sessionUpdateManyMutationInput, sessionUncheckedUpdateManyWithoutPatientInput>
  }

  export type sessionScalarWhereInput = {
    AND?: sessionScalarWhereInput | sessionScalarWhereInput[]
    OR?: sessionScalarWhereInput[]
    NOT?: sessionScalarWhereInput | sessionScalarWhereInput[]
    id?: IntFilter<"session"> | number
    date?: StringNullableFilter<"session"> | string | null
    day?: StringNullableFilter<"session"> | string | null
    techName?: StringNullableFilter<"session"> | string | null
    deviceNo?: StringNullableFilter<"session"> | string | null
    sessionType?: StringNullableFilter<"session"> | string | null
    sessionDuration?: StringNullableFilter<"session"> | string | null
    startingTime?: StringNullableFilter<"session"> | string | null
    anticoagulantUsed?: StringNullableFilter<"session"> | string | null
    ktv?: StringNullableFilter<"session"> | string | null
    urr?: StringNullableFilter<"session"> | string | null
    ultrafiltrationRate?: StringNullableFilter<"session"> | string | null
    wtPreHD?: StringNullableFilter<"session"> | string | null
    wtPostHD?: StringNullableFilter<"session"> | string | null
    HDStarting?: StringNullableFilter<"session"> | string | null
    heparinRate?: StringNullableFilter<"session"> | string | null
    heparinBolus?: StringNullableFilter<"session"> | string | null
    UFGoal?: StringNullableFilter<"session"> | string | null
    patientId?: IntFilter<"session"> | number
  }

  export type patientCreateWithoutFilesInput = {
    patientName?: string | null
    residentialId?: string | null
    age?: string | null
    birthDate?: string | null
    phoneNumber?: string | null
    address?: string | null
    bloodType?: string | null
    hight?: string | null
    weight?: string | null
    social?: string | null
    gender?: string | null
    sicknessCause?: string | null
    firstEverTreatment?: string | null
    firstTreatmentHere?: string | null
    note?: string | null
    filterNo?: string | null
    sessions?: sessionCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutFilesInput = {
    id?: number
    patientName?: string | null
    residentialId?: string | null
    age?: string | null
    birthDate?: string | null
    phoneNumber?: string | null
    address?: string | null
    bloodType?: string | null
    hight?: string | null
    weight?: string | null
    social?: string | null
    gender?: string | null
    sicknessCause?: string | null
    firstEverTreatment?: string | null
    firstTreatmentHere?: string | null
    note?: string | null
    filterNo?: string | null
    sessions?: sessionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutFilesInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutFilesInput, patientUncheckedCreateWithoutFilesInput>
  }

  export type patientUpsertWithoutFilesInput = {
    update: XOR<patientUpdateWithoutFilesInput, patientUncheckedUpdateWithoutFilesInput>
    create: XOR<patientCreateWithoutFilesInput, patientUncheckedCreateWithoutFilesInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutFilesInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutFilesInput, patientUncheckedUpdateWithoutFilesInput>
  }

  export type patientUpdateWithoutFilesInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateWithoutSessionsInput = {
    patientName?: string | null
    residentialId?: string | null
    age?: string | null
    birthDate?: string | null
    phoneNumber?: string | null
    address?: string | null
    bloodType?: string | null
    hight?: string | null
    weight?: string | null
    social?: string | null
    gender?: string | null
    sicknessCause?: string | null
    firstEverTreatment?: string | null
    firstTreatmentHere?: string | null
    note?: string | null
    filterNo?: string | null
    files?: fileCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutSessionsInput = {
    id?: number
    patientName?: string | null
    residentialId?: string | null
    age?: string | null
    birthDate?: string | null
    phoneNumber?: string | null
    address?: string | null
    bloodType?: string | null
    hight?: string | null
    weight?: string | null
    social?: string | null
    gender?: string | null
    sicknessCause?: string | null
    firstEverTreatment?: string | null
    firstTreatmentHere?: string | null
    note?: string | null
    filterNo?: string | null
    files?: fileUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutSessionsInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutSessionsInput, patientUncheckedCreateWithoutSessionsInput>
  }

  export type sessionHoursCreateWithoutSessionInput = {
    time?: string | null
    bloodPressure?: string | null
    rbs?: string | null
    ivf?: string | null
    drugs?: string | null
    cramps?: string | null
    vomitting?: string | null
    hematoma?: string | null
    chestPain?: string | null
    pulseRate?: string | null
    temperature?: string | null
  }

  export type sessionHoursUncheckedCreateWithoutSessionInput = {
    id?: number
    time?: string | null
    bloodPressure?: string | null
    rbs?: string | null
    ivf?: string | null
    drugs?: string | null
    cramps?: string | null
    vomitting?: string | null
    hematoma?: string | null
    chestPain?: string | null
    pulseRate?: string | null
    temperature?: string | null
  }

  export type sessionHoursCreateOrConnectWithoutSessionInput = {
    where: sessionHoursWhereUniqueInput
    create: XOR<sessionHoursCreateWithoutSessionInput, sessionHoursUncheckedCreateWithoutSessionInput>
  }

  export type sessionHoursCreateManySessionInputEnvelope = {
    data: sessionHoursCreateManySessionInput | sessionHoursCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type patientUpsertWithoutSessionsInput = {
    update: XOR<patientUpdateWithoutSessionsInput, patientUncheckedUpdateWithoutSessionsInput>
    create: XOR<patientCreateWithoutSessionsInput, patientUncheckedCreateWithoutSessionsInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutSessionsInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutSessionsInput, patientUncheckedUpdateWithoutSessionsInput>
  }

  export type patientUpdateWithoutSessionsInput = {
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
    files?: fileUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: NullableStringFieldUpdateOperationsInput | string | null
    residentialId?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: NullableStringFieldUpdateOperationsInput | string | null
    hight?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sicknessCause?: NullableStringFieldUpdateOperationsInput | string | null
    firstEverTreatment?: NullableStringFieldUpdateOperationsInput | string | null
    firstTreatmentHere?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    filterNo?: NullableStringFieldUpdateOperationsInput | string | null
    files?: fileUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type sessionHoursUpsertWithWhereUniqueWithoutSessionInput = {
    where: sessionHoursWhereUniqueInput
    update: XOR<sessionHoursUpdateWithoutSessionInput, sessionHoursUncheckedUpdateWithoutSessionInput>
    create: XOR<sessionHoursCreateWithoutSessionInput, sessionHoursUncheckedCreateWithoutSessionInput>
  }

  export type sessionHoursUpdateWithWhereUniqueWithoutSessionInput = {
    where: sessionHoursWhereUniqueInput
    data: XOR<sessionHoursUpdateWithoutSessionInput, sessionHoursUncheckedUpdateWithoutSessionInput>
  }

  export type sessionHoursUpdateManyWithWhereWithoutSessionInput = {
    where: sessionHoursScalarWhereInput
    data: XOR<sessionHoursUpdateManyMutationInput, sessionHoursUncheckedUpdateManyWithoutSessionInput>
  }

  export type sessionHoursScalarWhereInput = {
    AND?: sessionHoursScalarWhereInput | sessionHoursScalarWhereInput[]
    OR?: sessionHoursScalarWhereInput[]
    NOT?: sessionHoursScalarWhereInput | sessionHoursScalarWhereInput[]
    id?: IntFilter<"sessionHours"> | number
    time?: StringNullableFilter<"sessionHours"> | string | null
    bloodPressure?: StringNullableFilter<"sessionHours"> | string | null
    rbs?: StringNullableFilter<"sessionHours"> | string | null
    ivf?: StringNullableFilter<"sessionHours"> | string | null
    drugs?: StringNullableFilter<"sessionHours"> | string | null
    cramps?: StringNullableFilter<"sessionHours"> | string | null
    vomitting?: StringNullableFilter<"sessionHours"> | string | null
    hematoma?: StringNullableFilter<"sessionHours"> | string | null
    chestPain?: StringNullableFilter<"sessionHours"> | string | null
    pulseRate?: StringNullableFilter<"sessionHours"> | string | null
    temperature?: StringNullableFilter<"sessionHours"> | string | null
    sessionId?: IntFilter<"sessionHours"> | number
  }

  export type sessionCreateWithoutHoursInput = {
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
    patient: patientCreateNestedOneWithoutSessionsInput
  }

  export type sessionUncheckedCreateWithoutHoursInput = {
    id?: number
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
    patientId: number
  }

  export type sessionCreateOrConnectWithoutHoursInput = {
    where: sessionWhereUniqueInput
    create: XOR<sessionCreateWithoutHoursInput, sessionUncheckedCreateWithoutHoursInput>
  }

  export type sessionUpsertWithoutHoursInput = {
    update: XOR<sessionUpdateWithoutHoursInput, sessionUncheckedUpdateWithoutHoursInput>
    create: XOR<sessionCreateWithoutHoursInput, sessionUncheckedCreateWithoutHoursInput>
    where?: sessionWhereInput
  }

  export type sessionUpdateToOneWithWhereWithoutHoursInput = {
    where?: sessionWhereInput
    data: XOR<sessionUpdateWithoutHoursInput, sessionUncheckedUpdateWithoutHoursInput>
  }

  export type sessionUpdateWithoutHoursInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
    patient?: patientUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type sessionUncheckedUpdateWithoutHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type fileCreateManyPatientInput = {
    id?: number
    originalName: string
    storedName: string
    size: number
    mimeType: string
    path: string
    uploadedAt?: Date | string
  }

  export type sessionCreateManyPatientInput = {
    id?: number
    date?: string | null
    day?: string | null
    techName?: string | null
    deviceNo?: string | null
    sessionType?: string | null
    sessionDuration?: string | null
    startingTime?: string | null
    anticoagulantUsed?: string | null
    ktv?: string | null
    urr?: string | null
    ultrafiltrationRate?: string | null
    wtPreHD?: string | null
    wtPostHD?: string | null
    HDStarting?: string | null
    heparinRate?: string | null
    heparinBolus?: string | null
    UFGoal?: string | null
  }

  export type fileUpdateWithoutPatientInput = {
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalName?: StringFieldUpdateOperationsInput | string
    storedName?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionUpdateWithoutPatientInput = {
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: sessionHoursUpdateManyWithoutSessionNestedInput
  }

  export type sessionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: sessionHoursUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type sessionUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableStringFieldUpdateOperationsInput | string | null
    day?: NullableStringFieldUpdateOperationsInput | string | null
    techName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceNo?: NullableStringFieldUpdateOperationsInput | string | null
    sessionType?: NullableStringFieldUpdateOperationsInput | string | null
    sessionDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startingTime?: NullableStringFieldUpdateOperationsInput | string | null
    anticoagulantUsed?: NullableStringFieldUpdateOperationsInput | string | null
    ktv?: NullableStringFieldUpdateOperationsInput | string | null
    urr?: NullableStringFieldUpdateOperationsInput | string | null
    ultrafiltrationRate?: NullableStringFieldUpdateOperationsInput | string | null
    wtPreHD?: NullableStringFieldUpdateOperationsInput | string | null
    wtPostHD?: NullableStringFieldUpdateOperationsInput | string | null
    HDStarting?: NullableStringFieldUpdateOperationsInput | string | null
    heparinRate?: NullableStringFieldUpdateOperationsInput | string | null
    heparinBolus?: NullableStringFieldUpdateOperationsInput | string | null
    UFGoal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionHoursCreateManySessionInput = {
    id?: number
    time?: string | null
    bloodPressure?: string | null
    rbs?: string | null
    ivf?: string | null
    drugs?: string | null
    cramps?: string | null
    vomitting?: string | null
    hematoma?: string | null
    chestPain?: string | null
    pulseRate?: string | null
    temperature?: string | null
  }

  export type sessionHoursUpdateWithoutSessionInput = {
    time?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    ivf?: NullableStringFieldUpdateOperationsInput | string | null
    drugs?: NullableStringFieldUpdateOperationsInput | string | null
    cramps?: NullableStringFieldUpdateOperationsInput | string | null
    vomitting?: NullableStringFieldUpdateOperationsInput | string | null
    hematoma?: NullableStringFieldUpdateOperationsInput | string | null
    chestPain?: NullableStringFieldUpdateOperationsInput | string | null
    pulseRate?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionHoursUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    ivf?: NullableStringFieldUpdateOperationsInput | string | null
    drugs?: NullableStringFieldUpdateOperationsInput | string | null
    cramps?: NullableStringFieldUpdateOperationsInput | string | null
    vomitting?: NullableStringFieldUpdateOperationsInput | string | null
    hematoma?: NullableStringFieldUpdateOperationsInput | string | null
    chestPain?: NullableStringFieldUpdateOperationsInput | string | null
    pulseRate?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionHoursUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: NullableStringFieldUpdateOperationsInput | string | null
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    ivf?: NullableStringFieldUpdateOperationsInput | string | null
    drugs?: NullableStringFieldUpdateOperationsInput | string | null
    cramps?: NullableStringFieldUpdateOperationsInput | string | null
    vomitting?: NullableStringFieldUpdateOperationsInput | string | null
    hematoma?: NullableStringFieldUpdateOperationsInput | string | null
    chestPain?: NullableStringFieldUpdateOperationsInput | string | null
    pulseRate?: NullableStringFieldUpdateOperationsInput | string | null
    temperature?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}