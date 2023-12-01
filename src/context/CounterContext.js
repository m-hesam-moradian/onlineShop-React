import React, { useState, createContext } from "react";



const CounterContext = createContext({ count: 0, increment: () => {} });

export default CounterContext;
