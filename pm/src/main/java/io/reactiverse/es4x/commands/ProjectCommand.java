/*
 * Copyright 2019 Red Hat, Inc.
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
package io.reactiverse.es4x.commands;

import io.vertx.core.cli.CLIException;
import io.vertx.core.cli.annotations.Description;
import io.vertx.core.cli.annotations.Name;
import io.vertx.core.cli.annotations.Option;
import io.vertx.core.cli.annotations.Summary;
import io.vertx.core.spi.launcher.DefaultCommand;

@Name(Project.NAME)
@Summary(Project.SUMMARY)
public class ProjectCommand extends DefaultCommand {

  private final Project command = new Project();

  @Option(longName = "ts", shortName = "t", flag = true)
  @Description("Init a TypeScript project.")
  public void setForce(boolean force) {
    command.setTypeScript(force);
  }

  @Override
  public void run() throws CLIException {
    new Project()
      .setCwd(getCwd())
      .run();
  }
}
