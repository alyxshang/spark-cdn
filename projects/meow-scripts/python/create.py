# @MeowPerms => "WriteAccess"

import sys

def create_file(file_name):
    """
    Creates a file with the given file name.
    """
    new_file = open(file_name, 'w')
    new_file.close()

def main():
    """
    Creates a file named
    after the first argument
    supplied to this script.
    """
    args = sys.argv
    arg_length = len(sys.argv)
    if arg_length == 2:
        create_file(args[1])
    else:
        print('Invalid usage.')

if __name__ == '__main__':
    main()