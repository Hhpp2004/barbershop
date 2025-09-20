
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model barbershop
 * 
 */
export type barbershop = $Result.DefaultSelection<Prisma.$barbershopPayload>
/**
 * Model barbershopService
 * 
 */
export type barbershopService = $Result.DefaultSelection<Prisma.$barbershopServicePayload>
/**
 * Model booking
 * 
 */
export type booking = $Result.DefaultSelection<Prisma.$bookingPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barbershop`: Exposes CRUD operations for the **barbershop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barbershops
    * const barbershops = await prisma.barbershop.findMany()
    * ```
    */
  get barbershop(): Prisma.barbershopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barbershopService`: Exposes CRUD operations for the **barbershopService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarbershopServices
    * const barbershopServices = await prisma.barbershopService.findMany()
    * ```
    */
  get barbershopService(): Prisma.barbershopServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.bookingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    barbershop: 'barbershop',
    barbershopService: 'barbershopService',
    booking: 'booking'
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
      modelProps: "user" | "barbershop" | "barbershopService" | "booking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      barbershop: {
        payload: Prisma.$barbershopPayload<ExtArgs>
        fields: Prisma.barbershopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barbershopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barbershopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>
          }
          findFirst: {
            args: Prisma.barbershopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barbershopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>
          }
          findMany: {
            args: Prisma.barbershopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>[]
          }
          create: {
            args: Prisma.barbershopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>
          }
          createMany: {
            args: Prisma.barbershopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.barbershopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>[]
          }
          delete: {
            args: Prisma.barbershopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>
          }
          update: {
            args: Prisma.barbershopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>
          }
          deleteMany: {
            args: Prisma.barbershopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barbershopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.barbershopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>[]
          }
          upsert: {
            args: Prisma.barbershopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopPayload>
          }
          aggregate: {
            args: Prisma.BarbershopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershop>
          }
          groupBy: {
            args: Prisma.barbershopGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopGroupByOutputType>[]
          }
          count: {
            args: Prisma.barbershopCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopCountAggregateOutputType> | number
          }
        }
      }
      barbershopService: {
        payload: Prisma.$barbershopServicePayload<ExtArgs>
        fields: Prisma.barbershopServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barbershopServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barbershopServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>
          }
          findFirst: {
            args: Prisma.barbershopServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barbershopServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>
          }
          findMany: {
            args: Prisma.barbershopServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>[]
          }
          create: {
            args: Prisma.barbershopServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>
          }
          createMany: {
            args: Prisma.barbershopServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.barbershopServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>[]
          }
          delete: {
            args: Prisma.barbershopServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>
          }
          update: {
            args: Prisma.barbershopServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>
          }
          deleteMany: {
            args: Prisma.barbershopServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barbershopServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.barbershopServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>[]
          }
          upsert: {
            args: Prisma.barbershopServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barbershopServicePayload>
          }
          aggregate: {
            args: Prisma.BarbershopServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershopService>
          }
          groupBy: {
            args: Prisma.barbershopServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.barbershopServiceCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopServiceCountAggregateOutputType> | number
          }
        }
      }
      booking: {
        payload: Prisma.$bookingPayload<ExtArgs>
        fields: Prisma.bookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findFirst: {
            args: Prisma.bookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          findMany: {
            args: Prisma.bookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          create: {
            args: Prisma.bookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          createMany: {
            args: Prisma.bookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          delete: {
            args: Prisma.bookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          update: {
            args: Prisma.bookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          deleteMany: {
            args: Prisma.bookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>[]
          }
          upsert: {
            args: Prisma.bookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.bookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    barbershop?: barbershopOmit
    barbershopService?: barbershopServiceOmit
    booking?: bookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    booking: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | UserCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }


  /**
   * Count Type BarbershopCountOutputType
   */

  export type BarbershopCountOutputType = {
    services: number
  }

  export type BarbershopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | BarbershopCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopCountOutputType
     */
    select?: BarbershopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barbershopServiceWhereInput
  }


  /**
   * Count Type BarbershopServiceCountOutputType
   */

  export type BarbershopServiceCountOutputType = {
    booking: number
  }

  export type BarbershopServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BarbershopServiceCountOutputTypeCountBookingArgs
  }

  // Custom InputTypes
  /**
   * BarbershopServiceCountOutputType without action
   */
  export type BarbershopServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopServiceCountOutputType
     */
    select?: BarbershopServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarbershopServiceCountOutputType without action
   */
  export type BarbershopServiceCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    createAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    booking?: boolean | User$bookingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createAt" | "updateAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | User$bookingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      booking: Prisma.$bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends User$bookingArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.booking
   */
  export type User$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model barbershop
   */

  export type AggregateBarbershop = {
    _count: BarbershopCountAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  export type BarbershopMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageURL: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BarbershopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageURL: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BarbershopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    description: number
    imageURL: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type BarbershopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageURL?: true
    createAt?: true
    updateAt?: true
  }

  export type BarbershopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageURL?: true
    createAt?: true
    updateAt?: true
  }

  export type BarbershopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    description?: true
    imageURL?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type BarbershopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barbershop to aggregate.
     */
    where?: barbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershops to fetch.
     */
    orderBy?: barbershopOrderByWithRelationInput | barbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barbershops
    **/
    _count?: true | BarbershopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopMaxAggregateInputType
  }

  export type GetBarbershopAggregateType<T extends BarbershopAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershop[P]>
      : GetScalarType<T[P], AggregateBarbershop[P]>
  }




  export type barbershopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barbershopWhereInput
    orderBy?: barbershopOrderByWithAggregationInput | barbershopOrderByWithAggregationInput[]
    by: BarbershopScalarFieldEnum[] | BarbershopScalarFieldEnum
    having?: barbershopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopCountAggregateInputType | true
    _min?: BarbershopMinAggregateInputType
    _max?: BarbershopMaxAggregateInputType
  }

  export type BarbershopGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string[]
    description: string
    imageURL: string
    createAt: Date
    updateAt: Date
    _count: BarbershopCountAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  type GetBarbershopGroupByPayload<T extends barbershopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
        }
      >
    >


  export type barbershopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageURL?: boolean
    createAt?: boolean
    updateAt?: boolean
    services?: boolean | barbershop$servicesArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershop"]>

  export type barbershopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageURL?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["barbershop"]>

  export type barbershopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageURL?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["barbershop"]>

  export type barbershopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageURL?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type barbershopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "description" | "imageURL" | "createAt" | "updateAt", ExtArgs["result"]["barbershop"]>
  export type barbershopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | barbershop$servicesArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type barbershopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type barbershopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $barbershopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barbershop"
    objects: {
      services: Prisma.$barbershopServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string[]
      description: string
      imageURL: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["barbershop"]>
    composites: {}
  }

  type barbershopGetPayload<S extends boolean | null | undefined | barbershopDefaultArgs> = $Result.GetResult<Prisma.$barbershopPayload, S>

  type barbershopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barbershopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopCountAggregateInputType | true
    }

  export interface barbershopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barbershop'], meta: { name: 'barbershop' } }
    /**
     * Find zero or one Barbershop that matches the filter.
     * @param {barbershopFindUniqueArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barbershopFindUniqueArgs>(args: SelectSubset<T, barbershopFindUniqueArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barbershop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barbershopFindUniqueOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barbershopFindUniqueOrThrowArgs>(args: SelectSubset<T, barbershopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopFindFirstArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barbershopFindFirstArgs>(args?: SelectSubset<T, barbershopFindFirstArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopFindFirstOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barbershopFindFirstOrThrowArgs>(args?: SelectSubset<T, barbershopFindFirstOrThrowArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barbershops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barbershops
     * const barbershops = await prisma.barbershop.findMany()
     * 
     * // Get first 10 Barbershops
     * const barbershops = await prisma.barbershop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends barbershopFindManyArgs>(args?: SelectSubset<T, barbershopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barbershop.
     * @param {barbershopCreateArgs} args - Arguments to create a Barbershop.
     * @example
     * // Create one Barbershop
     * const Barbershop = await prisma.barbershop.create({
     *   data: {
     *     // ... data to create a Barbershop
     *   }
     * })
     * 
     */
    create<T extends barbershopCreateArgs>(args: SelectSubset<T, barbershopCreateArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barbershops.
     * @param {barbershopCreateManyArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barbershopCreateManyArgs>(args?: SelectSubset<T, barbershopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barbershops and returns the data saved in the database.
     * @param {barbershopCreateManyAndReturnArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends barbershopCreateManyAndReturnArgs>(args?: SelectSubset<T, barbershopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barbershop.
     * @param {barbershopDeleteArgs} args - Arguments to delete one Barbershop.
     * @example
     * // Delete one Barbershop
     * const Barbershop = await prisma.barbershop.delete({
     *   where: {
     *     // ... filter to delete one Barbershop
     *   }
     * })
     * 
     */
    delete<T extends barbershopDeleteArgs>(args: SelectSubset<T, barbershopDeleteArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barbershop.
     * @param {barbershopUpdateArgs} args - Arguments to update one Barbershop.
     * @example
     * // Update one Barbershop
     * const barbershop = await prisma.barbershop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barbershopUpdateArgs>(args: SelectSubset<T, barbershopUpdateArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barbershops.
     * @param {barbershopDeleteManyArgs} args - Arguments to filter Barbershops to delete.
     * @example
     * // Delete a few Barbershops
     * const { count } = await prisma.barbershop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barbershopDeleteManyArgs>(args?: SelectSubset<T, barbershopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barbershopUpdateManyArgs>(args: SelectSubset<T, barbershopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops and returns the data updated in the database.
     * @param {barbershopUpdateManyAndReturnArgs} args - Arguments to update many Barbershops.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends barbershopUpdateManyAndReturnArgs>(args: SelectSubset<T, barbershopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barbershop.
     * @param {barbershopUpsertArgs} args - Arguments to update or create a Barbershop.
     * @example
     * // Update or create a Barbershop
     * const barbershop = await prisma.barbershop.upsert({
     *   create: {
     *     // ... data to create a Barbershop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barbershop we want to update
     *   }
     * })
     */
    upsert<T extends barbershopUpsertArgs>(args: SelectSubset<T, barbershopUpsertArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopCountArgs} args - Arguments to filter Barbershops to count.
     * @example
     * // Count the number of Barbershops
     * const count = await prisma.barbershop.count({
     *   where: {
     *     // ... the filter for the Barbershops we want to count
     *   }
     * })
    **/
    count<T extends barbershopCountArgs>(
      args?: Subset<T, barbershopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarbershopAggregateArgs>(args: Subset<T, BarbershopAggregateArgs>): Prisma.PrismaPromise<GetBarbershopAggregateType<T>>

    /**
     * Group by Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopGroupByArgs} args - Group by arguments.
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
      T extends barbershopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barbershopGroupByArgs['orderBy'] }
        : { orderBy?: barbershopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, barbershopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barbershop model
   */
  readonly fields: barbershopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barbershop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barbershopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends barbershop$servicesArgs<ExtArgs> = {}>(args?: Subset<T, barbershop$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the barbershop model
   */
  interface barbershopFieldRefs {
    readonly id: FieldRef<"barbershop", 'String'>
    readonly name: FieldRef<"barbershop", 'String'>
    readonly address: FieldRef<"barbershop", 'String'>
    readonly phone: FieldRef<"barbershop", 'String[]'>
    readonly description: FieldRef<"barbershop", 'String'>
    readonly imageURL: FieldRef<"barbershop", 'String'>
    readonly createAt: FieldRef<"barbershop", 'DateTime'>
    readonly updateAt: FieldRef<"barbershop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * barbershop findUnique
   */
  export type barbershopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * Filter, which barbershop to fetch.
     */
    where: barbershopWhereUniqueInput
  }

  /**
   * barbershop findUniqueOrThrow
   */
  export type barbershopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * Filter, which barbershop to fetch.
     */
    where: barbershopWhereUniqueInput
  }

  /**
   * barbershop findFirst
   */
  export type barbershopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * Filter, which barbershop to fetch.
     */
    where?: barbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershops to fetch.
     */
    orderBy?: barbershopOrderByWithRelationInput | barbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barbershops.
     */
    cursor?: barbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * barbershop findFirstOrThrow
   */
  export type barbershopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * Filter, which barbershop to fetch.
     */
    where?: barbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershops to fetch.
     */
    orderBy?: barbershopOrderByWithRelationInput | barbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barbershops.
     */
    cursor?: barbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * barbershop findMany
   */
  export type barbershopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * Filter, which barbershops to fetch.
     */
    where?: barbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershops to fetch.
     */
    orderBy?: barbershopOrderByWithRelationInput | barbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barbershops.
     */
    cursor?: barbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershops.
     */
    skip?: number
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * barbershop create
   */
  export type barbershopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * The data needed to create a barbershop.
     */
    data: XOR<barbershopCreateInput, barbershopUncheckedCreateInput>
  }

  /**
   * barbershop createMany
   */
  export type barbershopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barbershops.
     */
    data: barbershopCreateManyInput | barbershopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barbershop createManyAndReturn
   */
  export type barbershopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * The data used to create many barbershops.
     */
    data: barbershopCreateManyInput | barbershopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barbershop update
   */
  export type barbershopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * The data needed to update a barbershop.
     */
    data: XOR<barbershopUpdateInput, barbershopUncheckedUpdateInput>
    /**
     * Choose, which barbershop to update.
     */
    where: barbershopWhereUniqueInput
  }

  /**
   * barbershop updateMany
   */
  export type barbershopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barbershops.
     */
    data: XOR<barbershopUpdateManyMutationInput, barbershopUncheckedUpdateManyInput>
    /**
     * Filter which barbershops to update
     */
    where?: barbershopWhereInput
    /**
     * Limit how many barbershops to update.
     */
    limit?: number
  }

  /**
   * barbershop updateManyAndReturn
   */
  export type barbershopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * The data used to update barbershops.
     */
    data: XOR<barbershopUpdateManyMutationInput, barbershopUncheckedUpdateManyInput>
    /**
     * Filter which barbershops to update
     */
    where?: barbershopWhereInput
    /**
     * Limit how many barbershops to update.
     */
    limit?: number
  }

  /**
   * barbershop upsert
   */
  export type barbershopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * The filter to search for the barbershop to update in case it exists.
     */
    where: barbershopWhereUniqueInput
    /**
     * In case the barbershop found by the `where` argument doesn't exist, create a new barbershop with this data.
     */
    create: XOR<barbershopCreateInput, barbershopUncheckedCreateInput>
    /**
     * In case the barbershop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barbershopUpdateInput, barbershopUncheckedUpdateInput>
  }

  /**
   * barbershop delete
   */
  export type barbershopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
    /**
     * Filter which barbershop to delete.
     */
    where: barbershopWhereUniqueInput
  }

  /**
   * barbershop deleteMany
   */
  export type barbershopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barbershops to delete
     */
    where?: barbershopWhereInput
    /**
     * Limit how many barbershops to delete.
     */
    limit?: number
  }

  /**
   * barbershop.services
   */
  export type barbershop$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    where?: barbershopServiceWhereInput
    orderBy?: barbershopServiceOrderByWithRelationInput | barbershopServiceOrderByWithRelationInput[]
    cursor?: barbershopServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * barbershop without action
   */
  export type barbershopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershop
     */
    select?: barbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershop
     */
    omit?: barbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopInclude<ExtArgs> | null
  }


  /**
   * Model barbershopService
   */

  export type AggregateBarbershopService = {
    _count: BarbershopServiceCountAggregateOutputType | null
    _avg: BarbershopServiceAvgAggregateOutputType | null
    _sum: BarbershopServiceSumAggregateOutputType | null
    _min: BarbershopServiceMinAggregateOutputType | null
    _max: BarbershopServiceMaxAggregateOutputType | null
  }

  export type BarbershopServiceAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type BarbershopServiceSumAggregateOutputType = {
    price: Decimal | null
  }

  export type BarbershopServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageURL: string | null
    price: Decimal | null
    barbershopID: string | null
  }

  export type BarbershopServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imageURL: string | null
    price: Decimal | null
    barbershopID: string | null
  }

  export type BarbershopServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imageURL: number
    price: number
    barbershopID: number
    _all: number
  }


  export type BarbershopServiceAvgAggregateInputType = {
    price?: true
  }

  export type BarbershopServiceSumAggregateInputType = {
    price?: true
  }

  export type BarbershopServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageURL?: true
    price?: true
    barbershopID?: true
  }

  export type BarbershopServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageURL?: true
    price?: true
    barbershopID?: true
  }

  export type BarbershopServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imageURL?: true
    price?: true
    barbershopID?: true
    _all?: true
  }

  export type BarbershopServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barbershopService to aggregate.
     */
    where?: barbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershopServices to fetch.
     */
    orderBy?: barbershopServiceOrderByWithRelationInput | barbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barbershopServices
    **/
    _count?: true | BarbershopServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarbershopServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarbershopServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopServiceMaxAggregateInputType
  }

  export type GetBarbershopServiceAggregateType<T extends BarbershopServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershopService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershopService[P]>
      : GetScalarType<T[P], AggregateBarbershopService[P]>
  }




  export type barbershopServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barbershopServiceWhereInput
    orderBy?: barbershopServiceOrderByWithAggregationInput | barbershopServiceOrderByWithAggregationInput[]
    by: BarbershopServiceScalarFieldEnum[] | BarbershopServiceScalarFieldEnum
    having?: barbershopServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopServiceCountAggregateInputType | true
    _avg?: BarbershopServiceAvgAggregateInputType
    _sum?: BarbershopServiceSumAggregateInputType
    _min?: BarbershopServiceMinAggregateInputType
    _max?: BarbershopServiceMaxAggregateInputType
  }

  export type BarbershopServiceGroupByOutputType = {
    id: string
    name: string
    description: string
    imageURL: string
    price: Decimal
    barbershopID: string
    _count: BarbershopServiceCountAggregateOutputType | null
    _avg: BarbershopServiceAvgAggregateOutputType | null
    _sum: BarbershopServiceSumAggregateOutputType | null
    _min: BarbershopServiceMinAggregateOutputType | null
    _max: BarbershopServiceMaxAggregateOutputType | null
  }

  type GetBarbershopServiceGroupByPayload<T extends barbershopServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopServiceGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopServiceGroupByOutputType[P]>
        }
      >
    >


  export type barbershopServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageURL?: boolean
    price?: boolean
    barbershopID?: boolean
    barbershop?: boolean | barbershopDefaultArgs<ExtArgs>
    booking?: boolean | barbershopService$bookingArgs<ExtArgs>
    _count?: boolean | BarbershopServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type barbershopServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageURL?: boolean
    price?: boolean
    barbershopID?: boolean
    barbershop?: boolean | barbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type barbershopServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imageURL?: boolean
    price?: boolean
    barbershopID?: boolean
    barbershop?: boolean | barbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type barbershopServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imageURL?: boolean
    price?: boolean
    barbershopID?: boolean
  }

  export type barbershopServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "imageURL" | "price" | "barbershopID", ExtArgs["result"]["barbershopService"]>
  export type barbershopServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | barbershopDefaultArgs<ExtArgs>
    booking?: boolean | barbershopService$bookingArgs<ExtArgs>
    _count?: boolean | BarbershopServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type barbershopServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | barbershopDefaultArgs<ExtArgs>
  }
  export type barbershopServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | barbershopDefaultArgs<ExtArgs>
  }

  export type $barbershopServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barbershopService"
    objects: {
      barbershop: Prisma.$barbershopPayload<ExtArgs>
      booking: Prisma.$bookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      imageURL: string
      price: Prisma.Decimal
      barbershopID: string
    }, ExtArgs["result"]["barbershopService"]>
    composites: {}
  }

  type barbershopServiceGetPayload<S extends boolean | null | undefined | barbershopServiceDefaultArgs> = $Result.GetResult<Prisma.$barbershopServicePayload, S>

  type barbershopServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barbershopServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopServiceCountAggregateInputType | true
    }

  export interface barbershopServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barbershopService'], meta: { name: 'barbershopService' } }
    /**
     * Find zero or one BarbershopService that matches the filter.
     * @param {barbershopServiceFindUniqueArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barbershopServiceFindUniqueArgs>(args: SelectSubset<T, barbershopServiceFindUniqueArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarbershopService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barbershopServiceFindUniqueOrThrowArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barbershopServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, barbershopServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopServiceFindFirstArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barbershopServiceFindFirstArgs>(args?: SelectSubset<T, barbershopServiceFindFirstArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopServiceFindFirstOrThrowArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barbershopServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, barbershopServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarbershopServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarbershopServices
     * const barbershopServices = await prisma.barbershopService.findMany()
     * 
     * // Get first 10 BarbershopServices
     * const barbershopServices = await prisma.barbershopService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends barbershopServiceFindManyArgs>(args?: SelectSubset<T, barbershopServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarbershopService.
     * @param {barbershopServiceCreateArgs} args - Arguments to create a BarbershopService.
     * @example
     * // Create one BarbershopService
     * const BarbershopService = await prisma.barbershopService.create({
     *   data: {
     *     // ... data to create a BarbershopService
     *   }
     * })
     * 
     */
    create<T extends barbershopServiceCreateArgs>(args: SelectSubset<T, barbershopServiceCreateArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarbershopServices.
     * @param {barbershopServiceCreateManyArgs} args - Arguments to create many BarbershopServices.
     * @example
     * // Create many BarbershopServices
     * const barbershopService = await prisma.barbershopService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barbershopServiceCreateManyArgs>(args?: SelectSubset<T, barbershopServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarbershopServices and returns the data saved in the database.
     * @param {barbershopServiceCreateManyAndReturnArgs} args - Arguments to create many BarbershopServices.
     * @example
     * // Create many BarbershopServices
     * const barbershopService = await prisma.barbershopService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarbershopServices and only return the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends barbershopServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, barbershopServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarbershopService.
     * @param {barbershopServiceDeleteArgs} args - Arguments to delete one BarbershopService.
     * @example
     * // Delete one BarbershopService
     * const BarbershopService = await prisma.barbershopService.delete({
     *   where: {
     *     // ... filter to delete one BarbershopService
     *   }
     * })
     * 
     */
    delete<T extends barbershopServiceDeleteArgs>(args: SelectSubset<T, barbershopServiceDeleteArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarbershopService.
     * @param {barbershopServiceUpdateArgs} args - Arguments to update one BarbershopService.
     * @example
     * // Update one BarbershopService
     * const barbershopService = await prisma.barbershopService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barbershopServiceUpdateArgs>(args: SelectSubset<T, barbershopServiceUpdateArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarbershopServices.
     * @param {barbershopServiceDeleteManyArgs} args - Arguments to filter BarbershopServices to delete.
     * @example
     * // Delete a few BarbershopServices
     * const { count } = await prisma.barbershopService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barbershopServiceDeleteManyArgs>(args?: SelectSubset<T, barbershopServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarbershopServices
     * const barbershopService = await prisma.barbershopService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barbershopServiceUpdateManyArgs>(args: SelectSubset<T, barbershopServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopServices and returns the data updated in the database.
     * @param {barbershopServiceUpdateManyAndReturnArgs} args - Arguments to update many BarbershopServices.
     * @example
     * // Update many BarbershopServices
     * const barbershopService = await prisma.barbershopService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarbershopServices and only return the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends barbershopServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, barbershopServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarbershopService.
     * @param {barbershopServiceUpsertArgs} args - Arguments to update or create a BarbershopService.
     * @example
     * // Update or create a BarbershopService
     * const barbershopService = await prisma.barbershopService.upsert({
     *   create: {
     *     // ... data to create a BarbershopService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarbershopService we want to update
     *   }
     * })
     */
    upsert<T extends barbershopServiceUpsertArgs>(args: SelectSubset<T, barbershopServiceUpsertArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarbershopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopServiceCountArgs} args - Arguments to filter BarbershopServices to count.
     * @example
     * // Count the number of BarbershopServices
     * const count = await prisma.barbershopService.count({
     *   where: {
     *     // ... the filter for the BarbershopServices we want to count
     *   }
     * })
    **/
    count<T extends barbershopServiceCountArgs>(
      args?: Subset<T, barbershopServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarbershopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarbershopServiceAggregateArgs>(args: Subset<T, BarbershopServiceAggregateArgs>): Prisma.PrismaPromise<GetBarbershopServiceAggregateType<T>>

    /**
     * Group by BarbershopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barbershopServiceGroupByArgs} args - Group by arguments.
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
      T extends barbershopServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barbershopServiceGroupByArgs['orderBy'] }
        : { orderBy?: barbershopServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, barbershopServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barbershopService model
   */
  readonly fields: barbershopServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barbershopService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barbershopServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends barbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, barbershopDefaultArgs<ExtArgs>>): Prisma__barbershopClient<$Result.GetResult<Prisma.$barbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends barbershopService$bookingArgs<ExtArgs> = {}>(args?: Subset<T, barbershopService$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the barbershopService model
   */
  interface barbershopServiceFieldRefs {
    readonly id: FieldRef<"barbershopService", 'String'>
    readonly name: FieldRef<"barbershopService", 'String'>
    readonly description: FieldRef<"barbershopService", 'String'>
    readonly imageURL: FieldRef<"barbershopService", 'String'>
    readonly price: FieldRef<"barbershopService", 'Decimal'>
    readonly barbershopID: FieldRef<"barbershopService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * barbershopService findUnique
   */
  export type barbershopServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which barbershopService to fetch.
     */
    where: barbershopServiceWhereUniqueInput
  }

  /**
   * barbershopService findUniqueOrThrow
   */
  export type barbershopServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which barbershopService to fetch.
     */
    where: barbershopServiceWhereUniqueInput
  }

  /**
   * barbershopService findFirst
   */
  export type barbershopServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which barbershopService to fetch.
     */
    where?: barbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershopServices to fetch.
     */
    orderBy?: barbershopServiceOrderByWithRelationInput | barbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barbershopServices.
     */
    cursor?: barbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barbershopServices.
     */
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * barbershopService findFirstOrThrow
   */
  export type barbershopServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which barbershopService to fetch.
     */
    where?: barbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershopServices to fetch.
     */
    orderBy?: barbershopServiceOrderByWithRelationInput | barbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barbershopServices.
     */
    cursor?: barbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barbershopServices.
     */
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * barbershopService findMany
   */
  export type barbershopServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which barbershopServices to fetch.
     */
    where?: barbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barbershopServices to fetch.
     */
    orderBy?: barbershopServiceOrderByWithRelationInput | barbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barbershopServices.
     */
    cursor?: barbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barbershopServices.
     */
    skip?: number
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * barbershopService create
   */
  export type barbershopServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a barbershopService.
     */
    data: XOR<barbershopServiceCreateInput, barbershopServiceUncheckedCreateInput>
  }

  /**
   * barbershopService createMany
   */
  export type barbershopServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barbershopServices.
     */
    data: barbershopServiceCreateManyInput | barbershopServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barbershopService createManyAndReturn
   */
  export type barbershopServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * The data used to create many barbershopServices.
     */
    data: barbershopServiceCreateManyInput | barbershopServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * barbershopService update
   */
  export type barbershopServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a barbershopService.
     */
    data: XOR<barbershopServiceUpdateInput, barbershopServiceUncheckedUpdateInput>
    /**
     * Choose, which barbershopService to update.
     */
    where: barbershopServiceWhereUniqueInput
  }

  /**
   * barbershopService updateMany
   */
  export type barbershopServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barbershopServices.
     */
    data: XOR<barbershopServiceUpdateManyMutationInput, barbershopServiceUncheckedUpdateManyInput>
    /**
     * Filter which barbershopServices to update
     */
    where?: barbershopServiceWhereInput
    /**
     * Limit how many barbershopServices to update.
     */
    limit?: number
  }

  /**
   * barbershopService updateManyAndReturn
   */
  export type barbershopServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * The data used to update barbershopServices.
     */
    data: XOR<barbershopServiceUpdateManyMutationInput, barbershopServiceUncheckedUpdateManyInput>
    /**
     * Filter which barbershopServices to update
     */
    where?: barbershopServiceWhereInput
    /**
     * Limit how many barbershopServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * barbershopService upsert
   */
  export type barbershopServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the barbershopService to update in case it exists.
     */
    where: barbershopServiceWhereUniqueInput
    /**
     * In case the barbershopService found by the `where` argument doesn't exist, create a new barbershopService with this data.
     */
    create: XOR<barbershopServiceCreateInput, barbershopServiceUncheckedCreateInput>
    /**
     * In case the barbershopService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barbershopServiceUpdateInput, barbershopServiceUncheckedUpdateInput>
  }

  /**
   * barbershopService delete
   */
  export type barbershopServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
    /**
     * Filter which barbershopService to delete.
     */
    where: barbershopServiceWhereUniqueInput
  }

  /**
   * barbershopService deleteMany
   */
  export type barbershopServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barbershopServices to delete
     */
    where?: barbershopServiceWhereInput
    /**
     * Limit how many barbershopServices to delete.
     */
    limit?: number
  }

  /**
   * barbershopService.booking
   */
  export type barbershopService$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    cursor?: bookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * barbershopService without action
   */
  export type barbershopServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barbershopService
     */
    select?: barbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barbershopService
     */
    omit?: barbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barbershopServiceInclude<ExtArgs> | null
  }


  /**
   * Model booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userID: string | null
    serviceID: string | null
    date: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    serviceID: string | null
    date: Date | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userID: number
    serviceID: number
    date: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    userID?: true
    serviceID?: true
    date?: true
    createAt?: true
    updateAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userID?: true
    serviceID?: true
    date?: true
    createAt?: true
    updateAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userID?: true
    serviceID?: true
    date?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking to aggregate.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type bookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingWhereInput
    orderBy?: bookingOrderByWithAggregationInput | bookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: bookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userID: string
    serviceID: string
    date: Date
    createAt: Date
    updateAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends bookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type bookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    serviceID?: boolean
    date?: boolean
    createAt?: boolean
    updateAt?: boolean
    service?: boolean | barbershopServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    serviceID?: boolean
    date?: boolean
    createAt?: boolean
    updateAt?: boolean
    service?: boolean | barbershopServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    serviceID?: boolean
    date?: boolean
    createAt?: boolean
    updateAt?: boolean
    service?: boolean | barbershopServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type bookingSelectScalar = {
    id?: boolean
    userID?: boolean
    serviceID?: boolean
    date?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type bookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "serviceID" | "date" | "createAt" | "updateAt", ExtArgs["result"]["booking"]>
  export type bookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | barbershopServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type bookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | barbershopServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type bookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | barbershopServiceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $bookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking"
    objects: {
      service: Prisma.$barbershopServicePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      serviceID: string
      date: Date
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type bookingGetPayload<S extends boolean | null | undefined | bookingDefaultArgs> = $Result.GetResult<Prisma.$bookingPayload, S>

  type bookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface bookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking'], meta: { name: 'booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {bookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingFindUniqueArgs>(args: SelectSubset<T, bookingFindUniqueArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingFindFirstArgs>(args?: SelectSubset<T, bookingFindFirstArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookingFindManyArgs>(args?: SelectSubset<T, bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {bookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends bookingCreateArgs>(args: SelectSubset<T, bookingCreateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingCreateManyArgs>(args?: SelectSubset<T, bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {bookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends bookingDeleteArgs>(args: SelectSubset<T, bookingDeleteArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {bookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingUpdateArgs>(args: SelectSubset<T, bookingUpdateArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingDeleteManyArgs>(args?: SelectSubset<T, bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingUpdateManyArgs>(args: SelectSubset<T, bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {bookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends bookingUpsertArgs>(args: SelectSubset<T, bookingUpsertArgs<ExtArgs>>): Prisma__bookingClient<$Result.GetResult<Prisma.$bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingCountArgs>(
      args?: Subset<T, bookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingGroupByArgs} args - Group by arguments.
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
      T extends bookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingGroupByArgs['orderBy'] }
        : { orderBy?: bookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking model
   */
  readonly fields: bookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends barbershopServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, barbershopServiceDefaultArgs<ExtArgs>>): Prisma__barbershopServiceClient<$Result.GetResult<Prisma.$barbershopServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the booking model
   */
  interface bookingFieldRefs {
    readonly id: FieldRef<"booking", 'String'>
    readonly userID: FieldRef<"booking", 'String'>
    readonly serviceID: FieldRef<"booking", 'String'>
    readonly date: FieldRef<"booking", 'DateTime'>
    readonly createAt: FieldRef<"booking", 'DateTime'>
    readonly updateAt: FieldRef<"booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking findUnique
   */
  export type bookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findUniqueOrThrow
   */
  export type bookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking findFirst
   */
  export type bookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findFirstOrThrow
   */
  export type bookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which booking to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking findMany
   */
  export type bookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingOrderByWithRelationInput | bookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * booking create
   */
  export type bookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to create a booking.
     */
    data: XOR<bookingCreateInput, bookingUncheckedCreateInput>
  }

  /**
   * booking createMany
   */
  export type bookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking createManyAndReturn
   */
  export type bookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingCreateManyInput | bookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking update
   */
  export type bookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The data needed to update a booking.
     */
    data: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
    /**
     * Choose, which booking to update.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking updateMany
   */
  export type bookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * booking updateManyAndReturn
   */
  export type bookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * booking upsert
   */
  export type bookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * The filter to search for the booking to update in case it exists.
     */
    where: bookingWhereUniqueInput
    /**
     * In case the booking found by the `where` argument doesn't exist, create a new booking with this data.
     */
    create: XOR<bookingCreateInput, bookingUncheckedCreateInput>
    /**
     * In case the booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingUpdateInput, bookingUncheckedUpdateInput>
  }

  /**
   * booking delete
   */
  export type bookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
    /**
     * Filter which booking to delete.
     */
    where: bookingWhereUniqueInput
  }

  /**
   * booking deleteMany
   */
  export type bookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * booking without action
   */
  export type bookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking
     */
    select?: bookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking
     */
    omit?: bookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BarbershopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    description: 'description',
    imageURL: 'imageURL',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type BarbershopScalarFieldEnum = (typeof BarbershopScalarFieldEnum)[keyof typeof BarbershopScalarFieldEnum]


  export const BarbershopServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imageURL: 'imageURL',
    price: 'price',
    barbershopID: 'barbershopID'
  };

  export type BarbershopServiceScalarFieldEnum = (typeof BarbershopServiceScalarFieldEnum)[keyof typeof BarbershopServiceScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    serviceID: 'serviceID',
    date: 'date',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    booking?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    booking?: bookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    booking?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type barbershopWhereInput = {
    AND?: barbershopWhereInput | barbershopWhereInput[]
    OR?: barbershopWhereInput[]
    NOT?: barbershopWhereInput | barbershopWhereInput[]
    id?: StringFilter<"barbershop"> | string
    name?: StringFilter<"barbershop"> | string
    address?: StringFilter<"barbershop"> | string
    phone?: StringNullableListFilter<"barbershop">
    description?: StringFilter<"barbershop"> | string
    imageURL?: StringFilter<"barbershop"> | string
    createAt?: DateTimeFilter<"barbershop"> | Date | string
    updateAt?: DateTimeFilter<"barbershop"> | Date | string
    services?: BarbershopServiceListRelationFilter
  }

  export type barbershopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    services?: barbershopServiceOrderByRelationAggregateInput
  }

  export type barbershopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: barbershopWhereInput | barbershopWhereInput[]
    OR?: barbershopWhereInput[]
    NOT?: barbershopWhereInput | barbershopWhereInput[]
    name?: StringFilter<"barbershop"> | string
    address?: StringFilter<"barbershop"> | string
    phone?: StringNullableListFilter<"barbershop">
    description?: StringFilter<"barbershop"> | string
    imageURL?: StringFilter<"barbershop"> | string
    createAt?: DateTimeFilter<"barbershop"> | Date | string
    updateAt?: DateTimeFilter<"barbershop"> | Date | string
    services?: BarbershopServiceListRelationFilter
  }, "id">

  export type barbershopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: barbershopCountOrderByAggregateInput
    _max?: barbershopMaxOrderByAggregateInput
    _min?: barbershopMinOrderByAggregateInput
  }

  export type barbershopScalarWhereWithAggregatesInput = {
    AND?: barbershopScalarWhereWithAggregatesInput | barbershopScalarWhereWithAggregatesInput[]
    OR?: barbershopScalarWhereWithAggregatesInput[]
    NOT?: barbershopScalarWhereWithAggregatesInput | barbershopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"barbershop"> | string
    name?: StringWithAggregatesFilter<"barbershop"> | string
    address?: StringWithAggregatesFilter<"barbershop"> | string
    phone?: StringNullableListFilter<"barbershop">
    description?: StringWithAggregatesFilter<"barbershop"> | string
    imageURL?: StringWithAggregatesFilter<"barbershop"> | string
    createAt?: DateTimeWithAggregatesFilter<"barbershop"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"barbershop"> | Date | string
  }

  export type barbershopServiceWhereInput = {
    AND?: barbershopServiceWhereInput | barbershopServiceWhereInput[]
    OR?: barbershopServiceWhereInput[]
    NOT?: barbershopServiceWhereInput | barbershopServiceWhereInput[]
    id?: StringFilter<"barbershopService"> | string
    name?: StringFilter<"barbershopService"> | string
    description?: StringFilter<"barbershopService"> | string
    imageURL?: StringFilter<"barbershopService"> | string
    price?: DecimalFilter<"barbershopService"> | Decimal | DecimalJsLike | number | string
    barbershopID?: StringFilter<"barbershopService"> | string
    barbershop?: XOR<BarbershopScalarRelationFilter, barbershopWhereInput>
    booking?: BookingListRelationFilter
  }

  export type barbershopServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    price?: SortOrder
    barbershopID?: SortOrder
    barbershop?: barbershopOrderByWithRelationInput
    booking?: bookingOrderByRelationAggregateInput
  }

  export type barbershopServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: barbershopServiceWhereInput | barbershopServiceWhereInput[]
    OR?: barbershopServiceWhereInput[]
    NOT?: barbershopServiceWhereInput | barbershopServiceWhereInput[]
    name?: StringFilter<"barbershopService"> | string
    description?: StringFilter<"barbershopService"> | string
    imageURL?: StringFilter<"barbershopService"> | string
    price?: DecimalFilter<"barbershopService"> | Decimal | DecimalJsLike | number | string
    barbershopID?: StringFilter<"barbershopService"> | string
    barbershop?: XOR<BarbershopScalarRelationFilter, barbershopWhereInput>
    booking?: BookingListRelationFilter
  }, "id">

  export type barbershopServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    price?: SortOrder
    barbershopID?: SortOrder
    _count?: barbershopServiceCountOrderByAggregateInput
    _avg?: barbershopServiceAvgOrderByAggregateInput
    _max?: barbershopServiceMaxOrderByAggregateInput
    _min?: barbershopServiceMinOrderByAggregateInput
    _sum?: barbershopServiceSumOrderByAggregateInput
  }

  export type barbershopServiceScalarWhereWithAggregatesInput = {
    AND?: barbershopServiceScalarWhereWithAggregatesInput | barbershopServiceScalarWhereWithAggregatesInput[]
    OR?: barbershopServiceScalarWhereWithAggregatesInput[]
    NOT?: barbershopServiceScalarWhereWithAggregatesInput | barbershopServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"barbershopService"> | string
    name?: StringWithAggregatesFilter<"barbershopService"> | string
    description?: StringWithAggregatesFilter<"barbershopService"> | string
    imageURL?: StringWithAggregatesFilter<"barbershopService"> | string
    price?: DecimalWithAggregatesFilter<"barbershopService"> | Decimal | DecimalJsLike | number | string
    barbershopID?: StringWithAggregatesFilter<"barbershopService"> | string
  }

  export type bookingWhereInput = {
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    id?: StringFilter<"booking"> | string
    userID?: StringFilter<"booking"> | string
    serviceID?: StringFilter<"booking"> | string
    date?: DateTimeFilter<"booking"> | Date | string
    createAt?: DateTimeFilter<"booking"> | Date | string
    updateAt?: DateTimeFilter<"booking"> | Date | string
    service?: XOR<BarbershopServiceScalarRelationFilter, barbershopServiceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type bookingOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    service?: barbershopServiceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookingWhereInput | bookingWhereInput[]
    OR?: bookingWhereInput[]
    NOT?: bookingWhereInput | bookingWhereInput[]
    userID?: StringFilter<"booking"> | string
    serviceID?: StringFilter<"booking"> | string
    date?: DateTimeFilter<"booking"> | Date | string
    createAt?: DateTimeFilter<"booking"> | Date | string
    updateAt?: DateTimeFilter<"booking"> | Date | string
    service?: XOR<BarbershopServiceScalarRelationFilter, barbershopServiceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type bookingOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: bookingCountOrderByAggregateInput
    _max?: bookingMaxOrderByAggregateInput
    _min?: bookingMinOrderByAggregateInput
  }

  export type bookingScalarWhereWithAggregatesInput = {
    AND?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    OR?: bookingScalarWhereWithAggregatesInput[]
    NOT?: bookingScalarWhereWithAggregatesInput | bookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"booking"> | string
    userID?: StringWithAggregatesFilter<"booking"> | string
    serviceID?: StringWithAggregatesFilter<"booking"> | string
    date?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    createAt?: DateTimeWithAggregatesFilter<"booking"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"booking"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    booking?: bookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    booking?: bookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: bookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type barbershopCreateInput = {
    id?: string
    name: string
    address: string
    phone?: barbershopCreatephoneInput | string[]
    description: string
    imageURL: string
    createAt?: Date | string
    updateAt?: Date | string
    services?: barbershopServiceCreateNestedManyWithoutBarbershopInput
  }

  export type barbershopUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone?: barbershopCreatephoneInput | string[]
    description: string
    imageURL: string
    createAt?: Date | string
    updateAt?: Date | string
    services?: barbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type barbershopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: barbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: barbershopServiceUpdateManyWithoutBarbershopNestedInput
  }

  export type barbershopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: barbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: barbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type barbershopCreateManyInput = {
    id?: string
    name: string
    address: string
    phone?: barbershopCreatephoneInput | string[]
    description: string
    imageURL: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type barbershopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: barbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type barbershopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: barbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type barbershopServiceCreateInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
    barbershop: barbershopCreateNestedOneWithoutServicesInput
    booking?: bookingCreateNestedManyWithoutServiceInput
  }

  export type barbershopServiceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
    barbershopID: string
    booking?: bookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type barbershopServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    barbershop?: barbershopUpdateOneRequiredWithoutServicesNestedInput
    booking?: bookingUpdateManyWithoutServiceNestedInput
  }

  export type barbershopServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    barbershopID?: StringFieldUpdateOperationsInput | string
    booking?: bookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type barbershopServiceCreateManyInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
    barbershopID: string
  }

  export type barbershopServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type barbershopServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    barbershopID?: StringFieldUpdateOperationsInput | string
  }

  export type bookingCreateInput = {
    id?: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    service: barbershopServiceCreateNestedOneWithoutBookingInput
    user: UserCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateInput = {
    id?: string
    userID: string
    serviceID: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type bookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: barbershopServiceUpdateOneRequiredWithoutBookingNestedInput
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyInput = {
    id?: string
    userID: string
    serviceID: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type bookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: bookingWhereInput
    some?: bookingWhereInput
    none?: bookingWhereInput
  }

  export type bookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BarbershopServiceListRelationFilter = {
    every?: barbershopServiceWhereInput
    some?: barbershopServiceWhereInput
    none?: barbershopServiceWhereInput
  }

  export type barbershopServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type barbershopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type barbershopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type barbershopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BarbershopScalarRelationFilter = {
    is?: barbershopWhereInput
    isNot?: barbershopWhereInput
  }

  export type barbershopServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    price?: SortOrder
    barbershopID?: SortOrder
  }

  export type barbershopServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type barbershopServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    price?: SortOrder
    barbershopID?: SortOrder
  }

  export type barbershopServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imageURL?: SortOrder
    price?: SortOrder
    barbershopID?: SortOrder
  }

  export type barbershopServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BarbershopServiceScalarRelationFilter = {
    is?: barbershopServiceWhereInput
    isNot?: barbershopServiceWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type bookingCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type bookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type bookingMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    serviceID?: SortOrder
    date?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type bookingCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type bookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput> | bookingCreateWithoutUserInput[] | bookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutUserInput | bookingCreateOrConnectWithoutUserInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutUserInput | bookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bookingCreateManyUserInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutUserInput | bookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutUserInput | bookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type barbershopCreatephoneInput = {
    set: string[]
  }

  export type barbershopServiceCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<barbershopServiceCreateWithoutBarbershopInput, barbershopServiceUncheckedCreateWithoutBarbershopInput> | barbershopServiceCreateWithoutBarbershopInput[] | barbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: barbershopServiceCreateOrConnectWithoutBarbershopInput | barbershopServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: barbershopServiceCreateManyBarbershopInputEnvelope
    connect?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
  }

  export type barbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<barbershopServiceCreateWithoutBarbershopInput, barbershopServiceUncheckedCreateWithoutBarbershopInput> | barbershopServiceCreateWithoutBarbershopInput[] | barbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: barbershopServiceCreateOrConnectWithoutBarbershopInput | barbershopServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: barbershopServiceCreateManyBarbershopInputEnvelope
    connect?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
  }

  export type barbershopUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type barbershopServiceUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<barbershopServiceCreateWithoutBarbershopInput, barbershopServiceUncheckedCreateWithoutBarbershopInput> | barbershopServiceCreateWithoutBarbershopInput[] | barbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: barbershopServiceCreateOrConnectWithoutBarbershopInput | barbershopServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: barbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput | barbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: barbershopServiceCreateManyBarbershopInputEnvelope
    set?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    disconnect?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    delete?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    connect?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    update?: barbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput | barbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: barbershopServiceUpdateManyWithWhereWithoutBarbershopInput | barbershopServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: barbershopServiceScalarWhereInput | barbershopServiceScalarWhereInput[]
  }

  export type barbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<barbershopServiceCreateWithoutBarbershopInput, barbershopServiceUncheckedCreateWithoutBarbershopInput> | barbershopServiceCreateWithoutBarbershopInput[] | barbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: barbershopServiceCreateOrConnectWithoutBarbershopInput | barbershopServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: barbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput | barbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: barbershopServiceCreateManyBarbershopInputEnvelope
    set?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    disconnect?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    delete?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    connect?: barbershopServiceWhereUniqueInput | barbershopServiceWhereUniqueInput[]
    update?: barbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput | barbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: barbershopServiceUpdateManyWithWhereWithoutBarbershopInput | barbershopServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: barbershopServiceScalarWhereInput | barbershopServiceScalarWhereInput[]
  }

  export type barbershopCreateNestedOneWithoutServicesInput = {
    create?: XOR<barbershopCreateWithoutServicesInput, barbershopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: barbershopCreateOrConnectWithoutServicesInput
    connect?: barbershopWhereUniqueInput
  }

  export type bookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type bookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type barbershopUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<barbershopCreateWithoutServicesInput, barbershopUncheckedCreateWithoutServicesInput>
    connectOrCreate?: barbershopCreateOrConnectWithoutServicesInput
    upsert?: barbershopUpsertWithoutServicesInput
    connect?: barbershopWhereUniqueInput
    update?: XOR<XOR<barbershopUpdateToOneWithWhereWithoutServicesInput, barbershopUpdateWithoutServicesInput>, barbershopUncheckedUpdateWithoutServicesInput>
  }

  export type bookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutServiceInput | bookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutServiceInput | bookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutServiceInput | bookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type bookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput> | bookingCreateWithoutServiceInput[] | bookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: bookingCreateOrConnectWithoutServiceInput | bookingCreateOrConnectWithoutServiceInput[]
    upsert?: bookingUpsertWithWhereUniqueWithoutServiceInput | bookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: bookingCreateManyServiceInputEnvelope
    set?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    disconnect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    delete?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    connect?: bookingWhereUniqueInput | bookingWhereUniqueInput[]
    update?: bookingUpdateWithWhereUniqueWithoutServiceInput | bookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: bookingUpdateManyWithWhereWithoutServiceInput | bookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: bookingScalarWhereInput | bookingScalarWhereInput[]
  }

  export type barbershopServiceCreateNestedOneWithoutBookingInput = {
    create?: XOR<barbershopServiceCreateWithoutBookingInput, barbershopServiceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: barbershopServiceCreateOrConnectWithoutBookingInput
    connect?: barbershopServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    connect?: UserWhereUniqueInput
  }

  export type barbershopServiceUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<barbershopServiceCreateWithoutBookingInput, barbershopServiceUncheckedCreateWithoutBookingInput>
    connectOrCreate?: barbershopServiceCreateOrConnectWithoutBookingInput
    upsert?: barbershopServiceUpsertWithoutBookingInput
    connect?: barbershopServiceWhereUniqueInput
    update?: XOR<XOR<barbershopServiceUpdateToOneWithWhereWithoutBookingInput, barbershopServiceUpdateWithoutBookingInput>, barbershopServiceUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput
    upsert?: UserUpsertWithoutBookingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingInput, UserUpdateWithoutBookingInput>, UserUncheckedUpdateWithoutBookingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type bookingCreateWithoutUserInput = {
    id?: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    service: barbershopServiceCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutUserInput = {
    id?: string
    serviceID: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type bookingCreateOrConnectWithoutUserInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingCreateManyUserInputEnvelope = {
    data: bookingCreateManyUserInput | bookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type bookingUpsertWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
    create: XOR<bookingCreateWithoutUserInput, bookingUncheckedCreateWithoutUserInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutUserInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutUserInput, bookingUncheckedUpdateWithoutUserInput>
  }

  export type bookingUpdateManyWithWhereWithoutUserInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutUserInput>
  }

  export type bookingScalarWhereInput = {
    AND?: bookingScalarWhereInput | bookingScalarWhereInput[]
    OR?: bookingScalarWhereInput[]
    NOT?: bookingScalarWhereInput | bookingScalarWhereInput[]
    id?: StringFilter<"booking"> | string
    userID?: StringFilter<"booking"> | string
    serviceID?: StringFilter<"booking"> | string
    date?: DateTimeFilter<"booking"> | Date | string
    createAt?: DateTimeFilter<"booking"> | Date | string
    updateAt?: DateTimeFilter<"booking"> | Date | string
  }

  export type barbershopServiceCreateWithoutBarbershopInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
    booking?: bookingCreateNestedManyWithoutServiceInput
  }

  export type barbershopServiceUncheckedCreateWithoutBarbershopInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
    booking?: bookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type barbershopServiceCreateOrConnectWithoutBarbershopInput = {
    where: barbershopServiceWhereUniqueInput
    create: XOR<barbershopServiceCreateWithoutBarbershopInput, barbershopServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type barbershopServiceCreateManyBarbershopInputEnvelope = {
    data: barbershopServiceCreateManyBarbershopInput | barbershopServiceCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type barbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: barbershopServiceWhereUniqueInput
    update: XOR<barbershopServiceUpdateWithoutBarbershopInput, barbershopServiceUncheckedUpdateWithoutBarbershopInput>
    create: XOR<barbershopServiceCreateWithoutBarbershopInput, barbershopServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type barbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: barbershopServiceWhereUniqueInput
    data: XOR<barbershopServiceUpdateWithoutBarbershopInput, barbershopServiceUncheckedUpdateWithoutBarbershopInput>
  }

  export type barbershopServiceUpdateManyWithWhereWithoutBarbershopInput = {
    where: barbershopServiceScalarWhereInput
    data: XOR<barbershopServiceUpdateManyMutationInput, barbershopServiceUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type barbershopServiceScalarWhereInput = {
    AND?: barbershopServiceScalarWhereInput | barbershopServiceScalarWhereInput[]
    OR?: barbershopServiceScalarWhereInput[]
    NOT?: barbershopServiceScalarWhereInput | barbershopServiceScalarWhereInput[]
    id?: StringFilter<"barbershopService"> | string
    name?: StringFilter<"barbershopService"> | string
    description?: StringFilter<"barbershopService"> | string
    imageURL?: StringFilter<"barbershopService"> | string
    price?: DecimalFilter<"barbershopService"> | Decimal | DecimalJsLike | number | string
    barbershopID?: StringFilter<"barbershopService"> | string
  }

  export type barbershopCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    phone?: barbershopCreatephoneInput | string[]
    description: string
    imageURL: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type barbershopUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    address: string
    phone?: barbershopCreatephoneInput | string[]
    description: string
    imageURL: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type barbershopCreateOrConnectWithoutServicesInput = {
    where: barbershopWhereUniqueInput
    create: XOR<barbershopCreateWithoutServicesInput, barbershopUncheckedCreateWithoutServicesInput>
  }

  export type bookingCreateWithoutServiceInput = {
    id?: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutBookingInput
  }

  export type bookingUncheckedCreateWithoutServiceInput = {
    id?: string
    userID: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type bookingCreateOrConnectWithoutServiceInput = {
    where: bookingWhereUniqueInput
    create: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput>
  }

  export type bookingCreateManyServiceInputEnvelope = {
    data: bookingCreateManyServiceInput | bookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type barbershopUpsertWithoutServicesInput = {
    update: XOR<barbershopUpdateWithoutServicesInput, barbershopUncheckedUpdateWithoutServicesInput>
    create: XOR<barbershopCreateWithoutServicesInput, barbershopUncheckedCreateWithoutServicesInput>
    where?: barbershopWhereInput
  }

  export type barbershopUpdateToOneWithWhereWithoutServicesInput = {
    where?: barbershopWhereInput
    data: XOR<barbershopUpdateWithoutServicesInput, barbershopUncheckedUpdateWithoutServicesInput>
  }

  export type barbershopUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: barbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type barbershopUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: barbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: bookingWhereUniqueInput
    update: XOR<bookingUpdateWithoutServiceInput, bookingUncheckedUpdateWithoutServiceInput>
    create: XOR<bookingCreateWithoutServiceInput, bookingUncheckedCreateWithoutServiceInput>
  }

  export type bookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: bookingWhereUniqueInput
    data: XOR<bookingUpdateWithoutServiceInput, bookingUncheckedUpdateWithoutServiceInput>
  }

  export type bookingUpdateManyWithWhereWithoutServiceInput = {
    where: bookingScalarWhereInput
    data: XOR<bookingUpdateManyMutationInput, bookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type barbershopServiceCreateWithoutBookingInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
    barbershop: barbershopCreateNestedOneWithoutServicesInput
  }

  export type barbershopServiceUncheckedCreateWithoutBookingInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
    barbershopID: string
  }

  export type barbershopServiceCreateOrConnectWithoutBookingInput = {
    where: barbershopServiceWhereUniqueInput
    create: XOR<barbershopServiceCreateWithoutBookingInput, barbershopServiceUncheckedCreateWithoutBookingInput>
  }

  export type UserCreateWithoutBookingInput = {
    id?: string
    email: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBookingInput = {
    id?: string
    email: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
  }

  export type barbershopServiceUpsertWithoutBookingInput = {
    update: XOR<barbershopServiceUpdateWithoutBookingInput, barbershopServiceUncheckedUpdateWithoutBookingInput>
    create: XOR<barbershopServiceCreateWithoutBookingInput, barbershopServiceUncheckedCreateWithoutBookingInput>
    where?: barbershopServiceWhereInput
  }

  export type barbershopServiceUpdateToOneWithWhereWithoutBookingInput = {
    where?: barbershopServiceWhereInput
    data: XOR<barbershopServiceUpdateWithoutBookingInput, barbershopServiceUncheckedUpdateWithoutBookingInput>
  }

  export type barbershopServiceUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    barbershop?: barbershopUpdateOneRequiredWithoutServicesNestedInput
  }

  export type barbershopServiceUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    barbershopID?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutBookingInput = {
    update: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
    create: XOR<UserCreateWithoutBookingInput, UserUncheckedCreateWithoutBookingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingInput, UserUncheckedUpdateWithoutBookingInput>
  }

  export type UserUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingCreateManyUserInput = {
    id?: string
    serviceID: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type bookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: barbershopServiceUpdateOneRequiredWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type barbershopServiceCreateManyBarbershopInput = {
    id?: string
    name: string
    description: string
    imageURL: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type barbershopServiceUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking?: bookingUpdateManyWithoutServiceNestedInput
  }

  export type barbershopServiceUncheckedUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    booking?: bookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type barbershopServiceUncheckedUpdateManyWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type bookingCreateManyServiceInput = {
    id?: string
    userID: string
    date: Date | string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type bookingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingNestedInput
  }

  export type bookingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
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