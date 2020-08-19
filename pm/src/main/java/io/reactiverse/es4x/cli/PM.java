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
package io.reactiverse.es4x.cli;

import io.reactiverse.es4x.commands.Init;
import io.reactiverse.es4x.commands.Install;
import io.reactiverse.es4x.commands.SecurityPolicy;
import io.reactiverse.es4x.commands.Versions;

public class PM {

  private static void printUsage() {
    System.err.println("Usage: es4x [COMMAND] [OPTIONS] [arg...]");
    System.err.println();
    System.err.println("Commands:");
    System.err.println(Init.NAME + "\t\t" + Init.SUMMARY);
    System.err.println(Install.NAME + "\t\t" + Install.SUMMARY);
    System.err.println(SecurityPolicy.NAME + "\t\t" + SecurityPolicy.SUMMARY);
    System.err.println(Versions.NAME + "\t\t" + Versions.SUMMARY);
    System.err.println();
    System.err.println("Run 'es4x COMMAND --help' for more information on a command.");
  }

  public static void main(String[] args) {
    if (args == null || args.length == 0) {
      // default action is help
      args = new String[] { "--help" };
    }

    String command = args[0];
    // strip the command out of the arguments
    String[] cmdArgs = new String[args.length - 1];
    System.arraycopy(args, 1, cmdArgs, 0, cmdArgs.length);

    switch (command) {
      case Init.NAME:
        new Init(cmdArgs).run();
        System.exit(0);
        return;
      case Install.NAME:
        new Install(cmdArgs).run();
        System.exit(0);
        return;
      case SecurityPolicy.NAME:
        new SecurityPolicy(cmdArgs).run();
        System.exit(0);
        return;
      case Versions.NAME:
        new Versions(cmdArgs).run();
        System.exit(0);
        return;
      case "-h":
      case "--help":
        printUsage();
        System.exit(0);
        return;
      default:
        printUsage();
        System.exit(2);
    }
  }
}
