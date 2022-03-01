import random

'''
Return a random choice from a collection

If no collection is passed in, use the default tuple main_list

Function:
    make_choice(collection) -> item
    get_list() -> default tuple
'''

main_list = ['Wilma', 'Fred', 'Betty', 'Barney', 'Pebbles', 'Bamm-Bamm']


def make_choice(choices=main_list):
    '''
    Return a choice from a tuple
            Parameters:
                    choices (tuple): A list to choose a random item from
                        defaults to a list contained in this module

            Returns:
                    one random choice from the tuple
    '''
    return random.choice(choices)


def get_list():
    ''' Return the default tuple
             Parameters:
                    none

            Returns:
                    the default tuple of choices
    '''
    global main_list
    return main_list


def delete_choice(choice):
    global main_list
    main_list.remove(choice)

