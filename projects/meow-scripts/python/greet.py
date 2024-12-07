# @MeowPerms => "SysCall"

import sys

def main() -> None:
    """
    Greets the user
    using the first argument
    supplied to this script.
    """
    args = sys.argv
    arg_length = len(sys.argv)
    if arg_length == 2:
        msg = 'Hello, ' + args[1] + '!'
        print(msg)
    else:
        print('Invalid usage.')
    return None

if __name__ == '__main__':
    main()