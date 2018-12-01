import os

file_path = os.path.dirname(os.path.realpath(__file__))

input_path = file_path + "/a.in.txt"

inpt = open(input_path, 'r')

targets = {
    'bot': {},
    'output': {}
}

def reverse_lookup(bot):
    for k in targets['bot']:
        if targets['bot'][k] == bot:
            print k
        print 'nope'

class Bot:
    def __init__(self):
        self.low_target = -1
        self.high_target = -1
        self.low_target_type = ''
        self.high_target_type = ''
        self.vals = []
    def print_me(self):
        print 'low:  ' + str(self.low_target_type) + ' ' + str(self.low_target)
        print 'high: ' + str(self.high_target_type) + ' ' + str(self.high_target)
        print 'vals: ' + str(self.vals)
    def accept(self, val):
        self.vals.append(val)
        if len(self.vals) == 2:
            self.distribute()
    def new_instruction(self, low_or_high, instruction):
        instruction = instruction.split(' ')
        target_type = instruction[0]
        target_loc = instruction[1]

        if low_or_high == 'low':
            self.low_target_type = target_type
            self.low_target = target_loc
        else:
            self.high_target_type = target_type
            self.high_target = target_loc
        if target_loc not in targets[target_type]:
            if target_type == 'bot':
                t = Bot()
            else:
                t = Output()
            targets[target_type][target_loc] = t
        if len(self.vals) == 2:
            self.distribute()
    def distribute(self):
        # if 61 in self.vals and 17 in self.vals:
        #     reverse_lookup(self)
        if self.low_target != -1 and self.high_target != -1:
            low_val = min(self.vals)
            high_val = max(self.vals)
            targets[self.low_target_type][self.low_target].accept(low_val)
            targets[self.high_target_type][self.high_target].accept(high_val)
            if self.low_target_type == 'output' and self.low_target in ['0', '1', '2']:
                targets['output'][self.low_target].print_me()
            if self.high_target_type == 'output' and self.high_target in ['0', '1', '2']:
                targets['output'][self.high_target].print_me()
            self.vals = []

class Output:
    def __init__(self):
        self.value = 0
    def accept(self, value):
        self.value = value
    def print_me(self):
        print self.value


for line in inpt:
    line = line.strip().split(' ')
    # print line
    # if  '0' in targets['output'] and '1' in targets['output'] and '2' in targets['output']:
    #     r = 1
    #     for i in ['0', '1', '2']:
    #         targets['output'][i].print_me()
    #         r *= targets['output'][i].value
    #     print r
    if line[0] == 'bot':
        if line[1] not in targets['bot']:
            targets['bot'][line[1]] = Bot()
        targets['bot'][line[1]].new_instruction('low', ' '.join(line[5:7]))
        targets['bot'][line[1]].new_instruction('high', ' '.join(line[-2:]))
        if line[1] == '190':
            targets['bot'][line[1]].print_me()
    if line[0] == 'value':
        if line[-1] not in targets['bot']:
            targets['bot'][line[-1]] = Bot()
        targets['bot'][line[-1]].accept(int(line[1]))

for i in ['74', '144', '21']:
    targets['bot'][i].print_me()
