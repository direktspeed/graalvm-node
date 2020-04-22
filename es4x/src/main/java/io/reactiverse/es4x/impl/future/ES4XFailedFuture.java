/*
 * Copyright 2018 Red Hat, Inc.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Apache License v2.0 which accompanies this distribution.
 *
 *  The Eclipse Public License is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  The Apache License v2.0 is available at
 *  http://www.opensource.org/licenses/apache2.0.php
 *
 *  You may elect to redistribute this code under either of these licenses.
 */
package io.reactiverse.es4x.impl.future;

import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.impl.ContextInternal;
import io.vertx.core.impl.NoStackTraceThrowable;
import org.graalvm.polyglot.Value;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
public class ES4XFailedFuture<T> implements Future<T>, Thenable {

  private static final Logger LOG = Logger.getLogger(ES4XFuture.class.getSimpleName());

  private final ContextInternal context;
  private final Throwable cause;

  /**
   * Create a future that has already failed
   * @param t the throwable
   */
  ES4XFailedFuture(ContextInternal context, Throwable t) {
    this.context = context;
    cause = t != null ? t : new NoStackTraceThrowable(null);
  }

  /**
   * Create a future that has already failed
   * @param failureMessage the failure message
   */
  ES4XFailedFuture(ContextInternal context, String failureMessage) {
    this(context, new NoStackTraceThrowable(failureMessage));
  }

  @Override
  public ContextInternal context() {
    return context;
  }

  @Override
  public boolean isComplete() {
    return true;
  }

  @Override
  public Future<T> onComplete(Handler<AsyncResult<T>> handler) {
    if (context != null) {
      context.dispatch(this, handler);
    } else {
      handler.handle(this);
    }
    return this;
  }

  @Override
  public T result() {
    return null;
  }

  @Override
  public Throwable cause() {
    return cause;
  }

  @Override
  public boolean succeeded() {
    return false;
  }

  @Override
  public boolean failed() {
    return true;
  }

  @Override
  public String toString() {
    return "Future{cause=" + cause.getMessage() + "}";
  }

  @Override
  public void then(Value onFulfilled, Value onRejected) {
    if (onRejected != null) {
      if (context != null) {
        context.dispatch(this, failure -> onRejected.execute(failure.cause()));
      } else {
        onRejected.execute(cause());
      }
    } else {
      LOG.log(Level.WARNING, "Possible Unhandled Promise: {0}", this);
    }
  }
}
